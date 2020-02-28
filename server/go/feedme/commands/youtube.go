package commands

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"time"

	"feedme/store"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/gomodule/redigo/redis"
)

const (
	baseYoutubeURL = "https://www.googleapis.com/youtube/v3/search"
)

// YTMediaData to store.
type YTMediaData struct {
	VideoID  string `json:"videoId"`
	Username string `json:"username,omitempty"`
}

// YTMedia to store.
type YTMedia struct {
	Data            YTMediaData `json:"data"`
	MediaSourceName string      `json:"mediaSourceName"`
	TrendName       string      `json:"trendName"`
	InternalID      string      `json:"internalId"`
	InsertedAt      time.Time   `json:"insertedAt"`
	ID              string      `json:"ID"`
}

type YTImporter struct {
	AppEnv     string
	StoreConn  redis.Conn
	MediaStore *store.RedisStore
}

func NewYTImporter(conn redis.Conn) *YTImporter {
	s := store.NewRedisStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &YTImporter{
		StoreConn:  conn,
		MediaStore: s,
		AppEnv:     appEnv,
	}
}

// Import imports.
func (I *YTImporter) Import(trends []string) error {
	mediasByMood, err := I.getMediasByMood(trends)
	if err != nil {
		return err
	}

	for trend, medias := range mediasByMood {
		I.StoreConn.Do("MULTI")
		for _, node := range medias {
			mediaBytes, err := I.getMediaBytes(node, trend)
			if err != nil {
				return err
			}

			score := int(node.Snippet.PublishedAt.Unix()) + 500
			err = I.StoreConn.Send(I.MediaStore.SetZRangeMediaForKey(trend, score, mediaBytes))
			if err != nil {
				return errors.New("error while redis setting yt for trend " + trend + ": " + err.Error())
			}

		}

		repl, err := I.StoreConn.Do("EXEC")
		if err != nil {
			return errors.New("error while redis exec yt: " + err.Error())
		}

		fmt.Printf("Redis Reply For Batch: %+v", repl)

	}

	return nil
}

func (I *YTImporter) getMediasByMood(trends []string) (map[string][]YTResult, error) {

	var feed *YTResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[string][]YTResult, 0)

	for _, trend := range trends {
		if I.AppEnv == "dev" {
			feed, err = localGetYT()
		} else {
			feed, err = webGetYT(trend)
		}
		if err != nil {
			return nil, err
		}

		allMedias[trend] = feed.Items
	}

	return allMedias, nil
}

// getMediaBytes returns a marshalled media ready for redis.
func (I *YTImporter) getMediaBytes(node YTResult, trend string) ([]byte, error) {
	m := Media{
		Data: YTMediaData{
			VideoID:  node.ID.VideoID,
			Username: "",
		},
		MediaSourceName: "youtube",
		TrendName:       trend,
		InternalID:      node.ID.VideoID,
		InsertedAt:      node.Snippet.PublishedAt,
		ID:              node.ID.VideoID + "-youtube",
	}

	mJSON, err := json.Marshal(m)

	if err != nil {
		return nil, errors.New("error while getting media bytes: " + err.Error())
	}

	return mJSON, nil
}

// webGet returns a hashtag feed based on a call to ig web api.
func webGetYT(mood string) (*YTResponse, error) {
	url := baseYoutubeURL + mood + "/"
	t, _ := time.Parse(time.RFC3339, "2020-02-25T00:00:00Z")
	params := &YTParams{
		Q:              "perth storm",
		Part:           "snippet",
		Key:            "AIzaSyCwLBjR7pIxVPKevjbIP0qj8vkxyUZUuKo",
		MaxResults:     50,
		Order:          "viewCount",
		Type:           "video",
		PublishedAfter: t,
	}

	feed := new(YTResponse)
	apiErr := new(YTError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetYT() (*YTResponse, error) {
	jsonFile, err := os.Open("youtube.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed YTResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
