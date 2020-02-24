// Package store implements ways to retrieve and persists data.
package store

import (
	"strconv"
	"sync"
	"time"

	"feedme/util"

	"github.com/gomodule/redigo/redis"
)

// TODO: look into TLS using stunnel.
// Spiped

const (
	// redisMoodsDBIndex the index of the bets db.
	redisMoodsDBIndex = 0

	// do not reach 16.

	// RedisMoodsPoolName is the name of the bets pool.
	RedisMoodsPoolName = "bets"
)

var pools map[string]*redis.Pool
var once = sync.Once{}

// redisDBs our maps with the mapping redis db <-> index.
var redisDBs = map[string]int{
	RedisMoodsPoolName: redisMoodsDBIndex,
}

// Pool wraps a new Pool function in a once.Do to only do it once...
func Pool() map[string]*redis.Pool {
	once.Do(newPools)

	return pools
}

// Init our redis pools with the different dbs.
func newPools() {
	host := util.GetEnv("REDIS_HOST", "redis")
	port := util.GetEnv("REDIS_PORT", "6379")
	addr := host + ":" + port
	// redisPwd := util.GetEnv("REDIS_PASSWORD", "password")
	pools = make(map[string]*redis.Pool, len(redisDBs))

	for k, v := range redisDBs {
		pools[k] = &redis.Pool{
			MaxIdle:     3,
			IdleTimeout: 240 * time.Second,
			Dial: (func(index int) func() (redis.Conn, error) {
				connDialer := func() (redis.Conn, error) {
					// pwd := redis.DialPassword(redisPwd)
					c, err := redis.Dial("tcp", addr)
					if err != nil {
						return nil, err
					}

					if _, err := c.Do("SELECT", strconv.Itoa(index)); err != nil {
						c.Close()
						return nil, err
					}

					return c, nil
				}
				return connDialer
			})(v),
		}
	}
}
