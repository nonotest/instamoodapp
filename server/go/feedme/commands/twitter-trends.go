package commands

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	"feedme/models"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/go-pg/pg/v9"
)

const (
	baseTwitterTrendsURL  = "https://api.twitter.com/1.1/trends/place.json"
	twitterTrendBatchSize = 50
)

type TwitterTrendsImporter struct {
	AppEnv string
	Store  *pg.DB
}

func NewTwitterTrendsImporter(store *pg.DB) *TwitterTrendsImporter {

	appEnv := util.GetEnv("APP_ENV", "dev")

	return &TwitterTrendsImporter{
		AppEnv: appEnv,
		Store:  store,
	}
}

// Import trends.
func (I *TwitterTrendsImporter) Import() ([]models.Trend, error) {
	trendsList, err := I.getTrends()
	if err != nil {
		return nil, err
	}

	// what time we are checking the trend at
	asOf := int(trendsList.AsOf.Unix())
	batchCounter := 0
	imported := make([]models.Trend, 0, 1)
	batch := make([]models.Trend, 0, 1)

	for _, trend := range trendsList.Trends {
		t := models.NewTrend(trend, asOf)
		batch = append(batch, t)
		batchCounter++

		if batchCounter == twitterTrendBatchSize {
			_, err := I.Store.
				Model(&batch).
				OnConflict("(hashtag) DO UPDATE").
				Set("score = EXCLUDED.score").
				Insert()

			if err != nil {
				return nil, err
			}

			imported = append(imported, batch...)

			// reset
			batchCounter = 0
			batch = batch[:0]
		}

	}

	return imported, nil
}

func (I *TwitterTrendsImporter) getTrends() (*models.TwitterTrendingResponse, error) {

	var trends *models.TwitterTrendingResponse
	var err error

	if I.AppEnv == "dev" {
		trends, err = localGetTwitterTrends()
	} else {
		trends, err = localGetTwitterTrends()
	}
	if err != nil {
		return nil, err
	}

	return trends, nil
}

// webGet returns a list of trends
// TODO: pagination
func webGetTwitterTrends() (*models.TwitterTrendingResponse, error) {

	url := baseTwitterTrendsURL
	params := &models.TwitterTrendsRequestParams{
		ID: 23424748,
	}

	trends := new(models.TwitterTrendingResponse)
	apiErr := new(models.TwitterTrendsError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(trends, apiErr)
	if err != nil {
		return nil, err
	}

	return trends, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetTwitterTrends() (*models.TwitterTrendingResponse, error) {
	jsonFile, err := os.Open("twitter-trending.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed models.TwitterTrendingResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
