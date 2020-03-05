package commands

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"time"

	"feedme/models"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/go-pg/pg/v9"
)

const (
	baseYoutubeURL = "https://www.googleapis.com/youtube/v3/search/"
)

// YTMediaData to store.
type YTMediaData struct {
	VideoID  string `json:"videoId"`
	Username string `json:"username,omitempty"`
}

type YTImporter struct {
	AppEnv string
	Store  *pg.DB
}

func NewYTImporter(store *pg.DB) *YTImporter {
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &YTImporter{
		Store:  store,
		AppEnv: appEnv,
	}
}

// Import imports.
func (I *YTImporter) Import(trends []models.Trend) error {
	mediasByTrend, err := I.getMediasByTrend(trends)
	if err != nil {
		return err
	}

	batchCounter := 0
	batch := make([]models.Media, 0, 1)

	for trendID, igNodes := range mediasByTrend {

		for _, node := range igNodes {
			metadata := YTMediaData{
				VideoID:  node.ID.VideoID,
				Username: "",
			}
			score := int(node.Snippet.PublishedAt.Unix()) + 500

			m := models.NewYTMedia(node, score, metadata, 2, trendID)

			batch = append(batch, m)
			batchCounter++

			if batchCounter == IGBatchSize {

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

func (I *YTImporter) getMediasByTrend(trends []models.Trend) (map[int64][]models.YTResult, error) {

	var feed *models.YTResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[int64][]models.YTResult, 0)

	for _, trend := range trends {
		if I.AppEnv == "dev" {
			feed, err = localGetYT()
		} else {
			feed, err = webGetYT(trend)
		}
		if err != nil {
			fmt.Printf("Err :%+v", err)
			continue
		}

		allMedias[trend.ID] = feed.Items
	}

	return allMedias, nil
}

// webGet returns a hashtag feed based on a call to ig web api.
// AIzaSyCO-LnXrueTOMqlSkZp9F_rUQQdkrqfgOA
func webGetYT(trend models.Trend) (*models.YTResponse, error) {
	url := baseYoutubeURL
	t, _ := time.Parse(time.RFC3339, "2020-02-25T00:00:00Z")
	params := &models.YTParams{
		Q:              trend.Name,
		Part:           "snippet",
		Key:            util.GetEnv("YT_API_KEY", "key"),
		MaxResults:     50,
		Order:          "viewCount",
		Type:           "video",
		PublishedAfter: t,
	}

	feed := new(models.YTResponse)
	apiErr := new(models.YTError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetYT() (*models.YTResponse, error) {
	jsonFile, err := os.Open("youtube.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed models.YTResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
