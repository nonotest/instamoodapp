package commands

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"feedme/store"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/gomodule/redigo/redis"
)

const (
	baseTwitterTrendsURL = "https://api.twitter.com/1.1/trends/place.json"
)

type TwitterTrendsImporter struct {
	AppEnv     string
	StoreConn  redis.Conn
	TrendStore *store.RedisTrendStore
}

func NewTwitterTrendsImporter(conn redis.Conn) *TwitterTrendsImporter {
	t := store.NewRedisTrendStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &TwitterTrendsImporter{
		StoreConn:  conn,
		TrendStore: t,
		AppEnv:     appEnv,
	}
}

func NewTwitterTrend(trend TwitterTrend, asOf int) Trend {
	return Trend{
		Name:  strings.Replace(trend.Name, "#", "", 1),
		Score: asOf + trend.TweetVolume,
	}
}

// time.Now().UTC().Unix()

// Import imports.
func (I *TwitterTrendsImporter) Import() error {
	trends, err := I.getTrends()
	if err != nil {
		return err
	}

	asOf := int(trends.AsOf.Unix())

	I.StoreConn.Send("MULTI")
	I.StoreConn.Send("DEL", "trends")
	for _, trend := range trends.Trends {

		t := NewTwitterTrend(trend, asOf)
		mJSON, err := json.Marshal(t)
		if err != nil {
			return errors.New("error while getting media bytes: " + err.Error())
		}

		err = I.StoreConn.Send(I.TrendStore.SetZRangeTrendForKey(asOf, mJSON))
		if err != nil {
			return errors.New("error while redis setting ig for trend " + t.Name + ": " + err.Error())
		}

		// fmt.Printf("Redis Reply For Batch: %+v", repl)

	}

	_, err = I.StoreConn.Do("EXEC")
	if err != nil {
		return errors.New("error while redis exec ig: " + err.Error())
	}

	return nil
}

func (I *TwitterTrendsImporter) getTrends() (*TwitterTrendingResponse, error) {

	var trends *TwitterTrendingResponse
	var err error

	if I.AppEnv == "dev" {
		trends, err = localGetTwitterTrends()
	} else {
		trends, err = webGetTwitterTrends()
	}
	if err != nil {
		return nil, err
	}

	return trends, nil
}

// webGet returns a list of trends
// TODO: pagination
func webGetTwitterTrends() (*TwitterTrendingResponse, error) {

	url := baseTwitterTrendsURL
	params := &TwitterTrendsRequestParams{
		ID: 23424748,
	}

	trends := new(TwitterTrendingResponse)
	apiErr := new(TwitterTrendsError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(trends, apiErr)
	if err != nil {
		return nil, err
	}

	return trends, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetTwitterTrends() (*TwitterTrendingResponse, error) {
	jsonFile, err := os.Open("twitter-trending.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed TwitterTrendingResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
