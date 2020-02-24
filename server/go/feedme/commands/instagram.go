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
	baseInstagramURL = "https://www.instagram.com/explore/tags/"
)

// IGMediaData to store.
type IGMediaData struct {
	URL    string `json:"url"`
	UserID int    `json:"userId,omitempty"`
}

// IGMedia to store.
type IGMedia struct {
	Data            IGMediaData `json:"data"`
	MediaSourceName string      `json:"mediaSourceName"`
	MoodName        string      `json:"moodName"`
	InternalID      string      `json:"internalId"`
	InsertedAt      time.Time   `json:"insertedAt"`
	ID              string      `json:"ID"`
}

type IGImporter struct {
	AppEnv     string
	StoreConn  redis.Conn
	MediaStore *store.RedisMediaStore
}

func NewIGImporter(conn redis.Conn) *IGImporter {
	s := store.NewRedisMediaStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &IGImporter{
		StoreConn:  conn,
		MediaStore: s,
		AppEnv:     appEnv,
	}
}

// Import imports.
func (I *IGImporter) Import() error {
	mediasByMood, err := I.getMediasByMood()
	if err != nil {
		return err
	}

	for mood, medias := range mediasByMood {
		I.StoreConn.Do("MULTI")
		for _, node := range medias {
			mediaBytes, err := I.getMediaBytes(node.Node, mood)
			if err != nil {
				return err
			}

			err = I.StoreConn.Send(I.MediaStore.SetZRangeMediaForKey("instagram-"+mood, node.Node.TakenAtTimestamp, mediaBytes))
			if err != nil {
				return errors.New("error while redis setting ig for mood " + mood + ": " + err.Error())
			}

			err = I.StoreConn.Send(I.MediaStore.SetZRangeMediaForKey("instagram", node.Node.TakenAtTimestamp, mediaBytes))
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

func (I *IGImporter) getMediasByMood() (map[string][]IGEdge, error) {

	// list of moods
	moods := []string{"angry", "loving", "blessed", "upset", "happy", "scenery", "beauty"}

	var feed *IGResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[string][]IGEdge, 0)

	for _, mood := range moods {
		if I.AppEnv == "dev" {
			feed, err = localGetIG()
		} else {
			feed, err = webGetIG(mood)
		}
		if err != nil {
			return nil, err
		}

		allMedias[mood] = feed.Graphql.Hashtag.EdgeHashtagToTopPosts.Edges
	}

	return allMedias, nil
}

// getMediaBytes returns a marshalled media ready for redis.
func (I *IGImporter) getMediaBytes(node IGNode, mood string) ([]byte, error) {
	m := Media{
		Data: IGMediaData{
			URL: node.DisplayURL,
		},
		MediaSourceName: "instagram",
		MoodName:        mood,
		InternalID:      node.ID,
		InsertedAt:      time.Unix(int64(node.TakenAtTimestamp), 0),
		ID:              node.ID + "-instagram",
	}

	mJSON, err := json.Marshal(m)

	if err != nil {
		return nil, errors.New("error while getting media bytes: " + err.Error())
	}

	return mJSON, nil
}

// webGet returns a hashtag feed based on a call to ig web api.
func webGetIG(mood string) (*IGResponse, error) {
	url := baseInstagramURL + mood + "/"
	params := &IGParams{ISJson: 1}

	feed := new(IGResponse)
	apiErr := new(IGError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(feed, apiErr)
	if err != nil {
		return nil, err
	}

	return feed, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetIG() (*IGResponse, error) {
	jsonFile, err := os.Open("instagram.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed IGResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
