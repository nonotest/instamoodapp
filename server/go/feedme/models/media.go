package models

import "time"

// Media to store.
type Media struct {
	tableName     struct{}    `pg:"\"ts_medias\""`
	Metadata      interface{} `json:"metadata"`
	MediaSourceID int64       `json:"media_source_id"`
	TrendID       int64       `json:"trend_id"`
	ExternalID    string      `json:"external_id"`
	Score         int         `json:"score"`

	ID        string    `json:"ID"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt time.Time `json:"deleted_at"`
}

func NewMedia(node IGNode, score int, metadata interface{}, mediaSourceID int64, trendID int64) Media {
	return Media{
		Metadata:      metadata,
		MediaSourceID: mediaSourceID,
		TrendID:       trendID,
		Score:         score,
		ExternalID:    "instagram-" + node.ID,
		CreatedAt:     time.Unix(int64(node.TakenAtTimestamp), 0),
	}
}
