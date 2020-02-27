package commands

import (
	"feedme/store"
	"fmt"
)

// Execute executes a command.
func Execute(args []string) {
	fmt.Printf("args")

	conn := store.Pool()[store.RedisMoodsPoolName].Get()
	defer conn.Close()

	twitterTrends := NewTwitterTrendsImporter(conn)
	err := twitterTrends.Import()

	// yt := NewYTImporter(conn)
	// err = yt.Import()
	// ig := NewIGImporter(conn)
	// err = ig.Import()
	// quotable := NewQuotableImporter(conn)
	// err = quotable.Import()

	if err != nil {
		panic(err)
	}
}
