package commands

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"time"

	"feedme/store"
	"feedme/util"

	"github.com/dghubble/sling"
	"github.com/gomodule/redigo/redis"
)

const (
	baseQuotableURL = "https://api.quotable.io/quotes"
)

// QuotableMediaData to store.
type QuotableMediaData struct {
	Author  string `json:"author"`
	Content string `json:"content"`
}

type QuotableImporter struct {
	AppEnv     string
	StoreConn  redis.Conn
	MediaStore *store.RedisMediaStore
}

func NewQuotableImporter(conn redis.Conn) *QuotableImporter {
	s := store.NewRedisMediaStore()
	appEnv := util.GetEnv("APP_ENV", "dev")

	return &QuotableImporter{
		StoreConn:  conn,
		MediaStore: s,
		AppEnv:     appEnv,
	}
}

func NewQuotableMedia(quote QuotableQuote, mood string) Media {
	return Media{
		Data: QuotableMediaData{
			Author:  quote.Author,
			Content: quote.Content,
		},
		MediaSourceName: "quotable",
		MoodName:        mood,
		InternalID:      quote.ID,
		InsertedAt:      time.Now().UTC(), // todo generate random times
		ID:              quote.ID + "-quotable",
	}
}

// time.Now().UTC().Unix()

// Import imports.
func (I *QuotableImporter) Import() error {
	quotes, err := I.getQuotes()
	if err != nil {
		return err
	}

	mood := "quotable"

	I.StoreConn.Send("MULTI")
	I.StoreConn.Send("DEL", mood)
	for _, quote := range quotes {

		media := NewQuotableMedia(quote, mood)
		mJSON, err := json.Marshal(media)
		if err != nil {
			return errors.New("error while getting media bytes: " + err.Error())
		}

		err = I.StoreConn.Send(I.MediaStore.SetSetMediaForKey(mood, mJSON))
		if err != nil {
			return errors.New("error while redis setting ig for mood " + mood + ": " + err.Error())
		}

		// fmt.Printf("Redis Reply For Batch: %+v", repl)

	}

	_, err = I.StoreConn.Do("EXEC")
	if err != nil {
		return errors.New("error while redis exec ig: " + err.Error())
	}

	return nil
}

func (I *QuotableImporter) getQuotes() ([]QuotableQuote, error) {

	var feed *QuotableListResponse
	var err error

	numQuotes := 2136
	perPage := 50
	offset := 0

	results := make([]QuotableQuote, 0)
	for {

		if I.AppEnv == "dev" {
			feed, err = localGetQuotable()
		} else {
			feed, err = webGetQuotable(perPage, offset)
		}
		if err != nil {
			return nil, err
		}

		results = append(results, feed.Results...)

		offset += perPage
		if offset > numQuotes {
			break
		}

	}

	return results, nil
}

// webGet returns a list of quotes
// TODO: pagination
func webGetQuotable(perPage int, offset int) (*QuotableListResponse, error) {

	url := baseQuotableURL
	params := &QuotableParams{Skip: offset, Limit: perPage}

	quotes := new(QuotableListResponse)
	apiErr := new(QuotableError)
	_, err := sling.New().Get(url).QueryStruct(params).Receive(quotes, apiErr)
	if err != nil {
		return nil, err
	}

	return quotes, nil
}

// localGet returns a hashtag feed based on a local file.
func localGetQuotable() (*QuotableListResponse, error) {
	jsonFile, err := os.Open("quotable.json")
	if err != nil {
		fmt.Printf("%+v", err)
		return nil, err
	}

	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var feed QuotableListResponse

	json.Unmarshal(byteValue, &feed)

	return &feed, nil
}
