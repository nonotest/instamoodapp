package commands

import "time"

// Media to store.
type Media struct {
	// TODO: data is interface
	Data            interface{} `json:"data"`
	MediaSourceName string      `json:"mediaSourceName"`
	TrendName       string      `json:"trendName"`
	InternalID      string      `json:"internalId"`
	InsertedAt      time.Time   `json:"insertedAt"`
	ID              string      `json:"ID"`
}
