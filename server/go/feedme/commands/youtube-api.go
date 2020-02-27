package commands

import "time"

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=perthstorm&key=AIzaSyCwLBjR7pIxVPKevjbIP0qj8vkxyUZUuKo&maxResults=50&order=viewCount&type=video&publishedAfter=2020-02-25T00:00:00Z

type YTParams struct {
	Q              string    `url:"q"`
	Part           string    `url:"part"`
	Key            string    `url:"key"`
	MaxResults     int       `url:"maxResults"`
	Order          string    `url:"order"`
	ViewCount      int       `url:"viewCount"`
	Type           string    `url:"type"`
	PublishedAfter time.Time `url:"publishedAfter"`
}

type YTResult struct {
	Kind string `json:"kind"`
	Etag string `json:"etag"`
	ID   struct {
		Kind    string `json:"kind"`
		VideoID string `json:"videoId"`
	} `json:"id"`
	Snippet struct {
		PublishedAt time.Time `json:"publishedAt"`
		ChannelID   string    `json:"channelId"`
		Title       string    `json:"title"`
		Description string    `json:"description"`
		Thumbnails  struct {
			Default struct {
				URL    string `json:"url"`
				Width  int    `json:"width"`
				Height int    `json:"height"`
			} `json:"default"`
			Medium struct {
				URL    string `json:"url"`
				Width  int    `json:"width"`
				Height int    `json:"height"`
			} `json:"medium"`
			High struct {
				URL    string `json:"url"`
				Width  int    `json:"width"`
				Height int    `json:"height"`
			} `json:"high"`
		} `json:"thumbnails"`
		ChannelTitle         string `json:"channelTitle"`
		LiveBroadcastContent string `json:"liveBroadcastContent"`
	} `json:"snippet"`
}

type YTResponse struct {
	Kind          string `json:"kind"`
	Etag          string `json:"etag"`
	NextPageToken string `json:"nextPageToken"`
	RegionCode    string `json:"regionCode"`
	PageInfo      struct {
		TotalResults   int `json:"totalResults"`
		ResultsPerPage int `json:"resultsPerPage"`
	} `json:"pageInfo"`
	Items []YTResult `json:"items"`
}

type YTError struct{}
