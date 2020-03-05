package models

import "time"

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=perthstorm&key=AIzaSyCwLBjR7pIxVPKevjbIP0qj8vkxyUZUuKo&maxResults=50&order=viewCount&type=video&publishedAfter=2020-02-25T00:00:00Z

type YTSearchParams struct {
	Q              string    `url:"q"`
	Part           string    `url:"part"`
	Key            string    `url:"key"`
	MaxResults     int       `url:"maxResults"`
	Order          string    `url:"order"`
	Type           string    `url:"type"`
	PublishedAfter time.Time `url:"publishedAfter"`
}

type YTSnippet struct {
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
}

type YTSearchResult struct {
	Kind string `json:"kind"`
	Etag string `json:"etag"`
	ID   struct {
		Kind    string `json:"kind"`
		VideoID string `json:"videoId"`
	} `json:"id"`
	Snippet YTSnippet `json:"snippet"`
}

type YTSearchResponse struct {
	Kind          string `json:"kind"`
	Etag          string `json:"etag"`
	NextPageToken string `json:"nextPageToken"`
	RegionCode    string `json:"regionCode"`
	PageInfo      struct {
		TotalResults   int `json:"totalResults"`
		ResultsPerPage int `json:"resultsPerPage"`
	} `json:"pageInfo"`
	Items []YTSearchResult `json:"items"`
}

type YTVideosParams struct {
	Part string `url:"part"`
	ID   string `url:"id"`
	Key  string `url:"key"`
}

type YTVideoResult struct {
	Kind       string `json:"kind"`
	Etag       string `json:"etag"`
	ID         string `json:"id"`
	Statistics struct {
		ViewCount     string `json:"viewCount"`
		LikeCount     string `json:"likeCount"`
		DislikeCount  string `json:"dislikeCount"`
		FavoriteCount string `json:"favoriteCount"`
		CommentCount  string `json:"commentCount"`
	} `json:"statistics"`
	Snippet YTSnippet `json:"snippet"`
}

type YTVideosResponse struct {
	Kind     string `json:"kind"`
	Etag     string `json:"etag"`
	PageInfo struct {
		TotalResults   int `json:"totalResults"`
		ResultsPerPage int `json:"resultsPerPage"`
	} `json:"pageInfo"`
	Items []YTVideoResult `json:"items"`
}

type YTError struct{}
