package commands

import (
	"log"

	"feedme/util"

	"github.com/go-pg/pg/v9"
	"github.com/joho/godotenv"
)

// init is invoked before main()
func init() {
	// loads values from .env into the system
	appEnv := util.GetEnv("APP_ENV", "dev")
	if appEnv != "live" {
		return
	}

	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

// Execute executes a command.
func Execute(args []string) {
	// Create the database `todos` manually within postgres
	db := pg.Connect(&pg.Options{
		Addr:     "db:5432",
		Database: "trendysnaps",
		User:     "postgres",
		Password: "postgres",
	})
	defer db.Close()

	// Get trends
	ttImporter := NewTwitterTrendsImporter(db)
	tt, err := ttImporter.Import()

	// Import IG related to the trends
	// ig := NewIGImporter(db)
	// err = ig.Import(tt)
	// if err != nil {
	// 	panic(err)
	// }

	yt := NewYTImporter(db)
	err = yt.Import(tt)
	if err != nil {
		panic(err)
	}

	// quotable := NewQuotableImporter(conn)
	// err = quotable.Import()

	if err != nil {
		panic(err)
	}
}
