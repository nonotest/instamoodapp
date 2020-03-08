package commands

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/url"
	"os"
	"strings"

	"feedme/models"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/go-pg/pg/v9"
)

const (
	baseInstagramURL = "https://www.instagram.com/explore/tags/"
	IGBatchSize      = 50
)

// IGMediaData to store.
type IGMediaData struct {
	URL    string `json:"url"`
	UserID int    `json:"userId,omitempty"`
}

type IGImporter struct {
	AppEnv string
	Store  *pg.DB
}

func NewIGImporter(store *pg.DB) *IGImporter {
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &IGImporter{
		Store:  store,
		AppEnv: appEnv,
	}
}

// Import imports.
func (I *IGImporter) Import(trends []models.Trend) error {
	igNodesByTrend, err := I.getMediasByTrend(trends)
	if err != nil {
		return err
	}

	batchCounter := 0
	batch := make([]models.Media, 0, 1)

	for trendID, igNodes := range igNodesByTrend {

		for _, node := range igNodes {
			metadata := IGMediaData{
				URL: node.Node.DisplayURL,
			}
			score := getIGScore(node.Node)
			m := models.NewIGMedia(node.Node, score, metadata, 1, trendID)

			batch = append(batch, m)
			batchCounter++

			if batchCounter == IGBatchSize || IGBatchSize >= len(igNodes) {

				_, err := I.Store.
					Model(&batch).
					OnConflict("(external_id) DO UPDATE").
					Set("score = EXCLUDED.score").
					Insert()

				if err != nil {
					return err
				}

				// reset
				batchCounter = 0
				batch = batch[:0]
			}
		}

	}

	return nil
}

func (I *IGImporter) getMediasByTrend(trends []models.Trend) (map[int64][]models.IGEdge, error) {
	var feed *models.IGResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[int64][]models.IGEdge, 0)

	for _, trend := range trends {

		if I.AppEnv == "dev" {
			feed, err = localGetIG()
		} else {
			feed, err = webGetIG(trend)
		}
		if err != nil {
			fmt.Printf("Error but don't stop .. %+v", err)
			continue
		}

		allMedias[trend.ID] = feed.Graphql.Hashtag.EdgeHashtagToMedia.Edges

		if I.AppEnv == "dev" {
			// we only do 1 batch (1 file..)
			return allMedias, nil
		}
	}

	return allMedias, nil
}

// webGet returns a hashtag feed based on a call to ig web api.
func webGetIG(trend models.Trend) (*models.IGResponse, error) {
	url := baseInstagramURL + url.PathEscape(strings.Replace(trend.Hashtag, " ", "", -1)) + "/"
	params := &models.IGRequestParams{ISJson: 1}

	feed := new(models.IGResponse)
	apiErr := new(models.IGError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetIG() (*models.IGResponse, error) {
	jsonFile, err := os.Open("instagram.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed models.IGResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}

// return score used to ranked instagram
func getIGScore(node models.IGNode) int {
	// Score can't be purely based on date.
	// edge_liked_by
	// edge_media_preview_like
	// edge_media_to_comment

	return node.TakenAtTimestamp + node.EdgeLikedBy.Count
}
