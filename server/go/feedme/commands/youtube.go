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
	VideoID  string `json:"video_id"`
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
				VideoID:  node.ID,
				Username: "",
			}
			score := 1
			// getYTScore(node)

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

func (I *YTImporter) getMediasByTrend(trends []models.Trend) (map[int64][]models.YTVideoResult, error) {

	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia

	allMedias := make(map[int64][]models.YTVideoResult, 0)

	for _, trend := range trends {
		var search *models.YTSearchResponse

		if I.AppEnv == "dev" {
			search, err = localGetYTSearches()
		} else {
			search, err = webGetYTSearches(trend)
		}
		if err != nil {
			fmt.Printf("YT Err :%+v", err)
			continue
		}

		videoIDs := ""
		for _, item := range search.Items {
			videoIDs = videoIDs + item.ID.VideoID + ","
		}

		var feed *models.YTVideosResponse

		if I.AppEnv == "dev" {
			feed, err = localGetYTVideos()
		} else {
			feed, err = webGetYTVideos(videoIDs)
		}
		if err != nil {
			fmt.Printf("YT Err :%+v", err)
			continue
		}

		allMedias[trend.ID] = feed.Items
		// get from videoIDs
	}

	return allMedias, nil
}

// webGetYTSearches returns a list of videos that match our hashtag.
func webGetYTSearches(trend models.Trend) (*models.YTSearchResponse, error) {
	url := baseYoutubeURL
	t, _ := time.Parse(time.RFC3339, "2020-02-25T00:00:00Z")
	params := &models.YTSearchParams{
		Q:              trend.Name,
		Part:           "snippet",
		Key:            util.GetEnv("YT_API_KEY_1", "key"),
		MaxResults:     50,
		Order:          "viewCount",
		Type:           "video",
		PublishedAfter: t,
	}

	feed := new(models.YTSearchResponse)
	apiErr := new(models.YTError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGetYTSearches returns videos matching a hashtag feed based on a local file.
func localGetYTSearches() (*models.YTSearchResponse, error) {
	jsonFile, err := os.Open("youtube-search.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed models.YTSearchResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}

// webGetYTVideos returns a hashtag feed based on a call to ig web api.
func webGetYTVideos(videoIDs string) (*models.YTVideosResponse, error) {
	url := baseYoutubeURL
	params := &models.YTVideosParams{
		ID:   videoIDs,
		Part: "snippet,statistics",
		Key:  util.GetEnv("YT_API_KEY_2", "key"),
	}

	feed := new(models.YTVideosResponse)
	apiErr := new(models.YTError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGetYTVideos returns videos matching a hashtag feed based on a local file.
func localGetYTVideos() (*models.YTVideosResponse, error) {
	jsonFile, err := os.Open("youtube-videos.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed models.YTVideosResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}

func getYTScore(node models.YTVideoResult) int {
	return int(node.Snippet.PublishedAt.Unix()) + 500
}
