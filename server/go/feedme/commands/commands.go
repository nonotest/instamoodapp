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

	var err error
	switch args[0] {
	case "instagram":
		// todo interface.
		ig := NewIGImporter(conn)
		err = ig.Import()

	case "quotable":
		quotable := NewQuotableImporter(conn)
		err = quotable.Import()

	case "youtube":
		yt := NewYTImporter(conn)
		err = yt.Import()
	}

	if err != nil {
		panic(err)
	}
}
