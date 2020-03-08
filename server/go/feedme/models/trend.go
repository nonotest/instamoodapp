package models

import (
	"fmt"
	"strings"
	"time"
)

type Trend struct {
	tableName struct{} `pg:"\"ts_trends\""`
	Hashtag   string   `json:"hashtag"`
	Name      string   `json:"name"`
	Score     int      `json:"score"`

	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt time.Time `json:"deleted_at"`
}

func (t Trend) String() string {
	return fmt.Sprintf("Trend<ID=%d Hastag%q Name=%q>", t.ID, t.Hashtag, t.Name)
}

func NewTrend(trend TwitterTrend, asOf int) Trend {
	return Trend{
		Name:    strings.Replace(trend.Name, "#", "", 1),
		Hashtag: trend.Name,
		Score:   asOf + trend.TweetVolume,
	}
}
