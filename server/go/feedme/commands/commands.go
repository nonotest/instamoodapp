package commands

import (
	"encoding/json"
	"feedme/store"

	"github.com/gomodule/redigo/redis"
)

// Execute executes a command.
func Execute(args []string) {

	conn := store.Pool()[store.RedisMoodsPoolName].Get()
	defer conn.Close()

	// Get trends
	twitterTrends := NewTwitterTrendsImporter(conn)
	err := twitterTrends.Import()

	// TODO: return from import or?
	// get trends
	trends := make([]Trend, 0, 0)
	trendBytes, _ := redis.ByteSlices(conn.Do(twitterTrends.RedisStore.GetRevRangeTrends(0, 5)))
	for _, tb := range trendBytes {
		var trend Trend
		json.Unmarshal(tb, &trend)
		trends = append(trends, trend)
	}

	// Import IG related to the trends
	ig := NewIGImporter(conn, trends)
	err = ig.Import()
	if err != nil {
		panic(err)
	}

	yt := NewYTImporter(conn, trends)
	err = yt.Import()
	if err != nil {
		panic(err)
	}

	// quotable := NewQuotableImporter(conn)
	// err = quotable.Import()

	if err != nil {
		panic(err)
	}
}
