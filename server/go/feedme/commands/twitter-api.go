package commands

import "time"

// 23424748

type TwitterTrendsRequestParams struct {
	ID int64 `json:"id"`
}

type TwitterTrendingResponse struct {
	Trends    []TwitterTrend `json:"trends"`
	AsOf      time.Time      `json:"as_of"`
	CreatedAt time.Time      `json:"created_at"`
	Locations []struct {
		Name  string `json:"name"`
		Woeid int    `json:"woeid"`
	} `json:"locations"`
}

type TwitterTrend struct {
	Name            string      `json:"name"`
	URL             string      `json:"url"`
	PromotedContent interface{} `json:"promoted_content"`
	Query           string      `json:"query"`
	TweetVolume     int         `json:"tweet_volume"`
}

// TwitterTrendError ig api error
type TwitterTrendsError struct{}
