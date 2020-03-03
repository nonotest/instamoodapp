package commands

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/url"
	"os"
	"strings"
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
	TrendName       string      `json:"trendName"`
	InternalID      string      `json:"internalId"`
	InsertedAt      time.Time   `json:"insertedAt"`
	ID              string      `json:"ID"`
}

type IGImporter struct {
	AppEnv    string
	StoreConn redis.Conn
	Store     *store.RedisStore
}

func NewIGImporter(conn redis.Conn) *IGImporter {
	s := store.NewRedisStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &IGImporter{
		StoreConn: conn,
		Store:     s,
		AppEnv:    appEnv,
	}
}

// Import imports.
func (I *IGImporter) Import(trends []string) error {
	mediasByMood, err := I.getMediasByMood(trends)
	if err != nil {
		return err
	}

	for trend, medias := range mediasByMood {
		I.StoreConn.Do("MULTI")
		for _, node := range medias {
			mediaBytes, err := I.getMediaBytes(node.Node, trend)
			if err != nil {
				return err
			}

			score := getScore(node)

			err = I.StoreConn.Send(I.Store.SetZRangeMediaForKey(trend, score, mediaBytes))
			if err != nil {
				return errors.New("error while redis setting ig for trend " + trend + ": " + err.Error())
			}

		}

		_, err := I.StoreConn.Do("EXEC")
		if err != nil {
			return errors.New("error while redis exec ig: " + err.Error())
		}

	}

	return nil
}

func (I *IGImporter) getMediasByMood(trends []string) (map[string][]IGEdge, error) {
	var feed *IGResponse
	var err error

	// EdgeHashtagToTopPosts
	// EdgeHashtagToMedia
	allMedias := make(map[string][]IGEdge, 0)

	for _, trend := range trends {

		if I.AppEnv == "dev" {
			feed, err = localGetIG()
		} else {
			feed, err = webGetIG(trend)
		}
		if err != nil {
			fmt.Printf("Error but don't stop .. %+v", nil)
			continue
		}

		allMedias[trend] = feed.Graphql.Hashtag.EdgeHashtagToMedia.Edges
	}

	return allMedias, nil
}

// getMediaBytes returns a marshalled media ready for redis.
func (I *IGImporter) getMediaBytes(node IGNode, trend string) ([]byte, error) {
	m := Media{
		Data: IGMediaData{
			URL: node.DisplayURL,
		},
		MediaSourceName: "instagram",
		TrendName:       trend,
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
func webGetIG(trend string) (*IGResponse, error) {
	url := baseInstagramURL + url.PathEscape(strings.Replace(trend, " ", "", -1)) + "/"
	params := &IGRequestParams{ISJson: 1}

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

// return score used to ranked instagram
func getScore(edge IGEdge) int64 {
	// Score can't be purely based on date.
	// edge_liked_by
	// edge_media_preview_like
	// edge_media_to_comment

	return node.Node.TakenAtTimestamp + node.Node.EdgeLikedBy.Count
}
