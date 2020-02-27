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
	MoodName        string      `json:"moodName"`
	InternalID      string      `json:"internalId"`
	InsertedAt      time.Time   `json:"insertedAt"`
	ID              string      `json:"ID"`
}

type YTImporter struct {
	AppEnv     string
	StoreConn  redis.Conn
	MediaStore *store.RedisMediaStore
}

func NewYTImporter(conn redis.Conn) *YTImporter {
	s := store.NewRedisMediaStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &YTImporter{
		StoreConn:  conn,
		MediaStore: s,
		AppEnv:     appEnv,
	}
}

// Import imports.
func (I *YTImporter) Import() error {
	mediasByMood, err := I.getMediasByMood()
	if err != nil {
		return err
	}

	for mood, medias := range mediasByMood {
		I.StoreConn.Do("MULTI")
		for _, node := range medias {
			mediaBytes, err := I.getMediaBytes(node, mood)
			if err != nil {
				return err
			}

			err = I.StoreConn.Send(I.MediaStore.SetZRangeMediaForKey("youtube-"+mood, int(node.Snippet.PublishedAt.Unix()), mediaBytes))
			if err != nil {
				return errors.New("error while redis setting ig for mood " + mood + ": " + err.Error())
			}

			err = I.StoreConn.Send(I.MediaStore.SetZRangeMediaForKey("youtube", int(node.Snippet.PublishedAt.Unix()), mediaBytes))
			if err != nil {
				return errors.New("error while redis setting ig: " + err.Error())
			}
		}

		repl, err := I.StoreConn.Do("EXEC")
		if err != nil {
			return errors.New("error while redis exec ig: " + err.Error())
		}

		fmt.Printf("Redis Reply For Batch: %+v", repl)

	}

	return nil
}

func (I *YTImporter) getMediasByMood() (map[string][]YTResult, error) {

	// list of moods
	moods := []string{"perthstorm", "loving", "blessed", "upset", "happy", "scenery", "beauty"}

	var feed *YTResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[string][]YTResult, 0)

	for _, mood := range moods {
		if I.AppEnv == "dev" {
			feed, err = localGetYT()
		} else {
			feed, err = webGetYT(mood)
		}
		if err != nil {
			return nil, err
		}

		allMedias[mood] = feed.Items
	}

	return allMedias, nil
}

// getMediaBytes returns a marshalled media ready for redis.
func (I *YTImporter) getMediaBytes(node YTResult, mood string) ([]byte, error) {
	m := Media{
		Data: YTMediaData{
			VideoID:  node.ID.VideoID,
			Username: "",
		},
		MediaSourceName: "youtube",
		MoodName:        mood,
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
