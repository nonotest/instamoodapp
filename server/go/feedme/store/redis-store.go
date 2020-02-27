package store

// RedisStore is rdms.
type RedisStore struct{}

// NewRedisStore returns a rdms.
func NewRedisStore() *RedisStore {
	return &RedisStore{}
}

// SetZRangeMediaForKey is used to send back the number of bets after
func (r *RedisStore) SetZRangeMediaForKey(key string, timestamp int, media []byte) (string, string, int, []byte) {
	return "ZADD", key, timestamp, media
}

// SetSetMediaForKey is used to send back the number of bets after
func (r *RedisStore) SetSetMediaForKey(key string, media []byte) (string, string, []byte) {
	return "SADD", key, media
}

// SetZRangeTrendForKey
func (r *RedisStore) SetZRangeTrendForKey(timestamp int, trend []byte) (string, string, int, []byte) {
	return "ZADD", "trends", timestamp, trend
}

// GetRevRangeTrends is ..
func (r *RedisStore) GetRevRangeTrends(start int, end int) (string, string, int, int) {
	return "ZREVRANGE", "trends", start, end
}

// SetSetTrendForKey
func (r *RedisStore) SetSetTrendForKey(trend []byte) (string, string, []byte) {
	return "SADD", "trends", trend
}
