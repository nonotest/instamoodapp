package store

// RedisMediaStore is rdms.
type RedisMediaStore struct{}

// NewRedisMediaStore returns a rdms.
func NewRedisMediaStore() *RedisMediaStore {
	return &RedisMediaStore{}
}

// SetZRangeMediaForKey is used to send back the number of bets after
func (r *RedisMediaStore) SetZRangeMediaForKey(key string, timestamp int, media []byte) (string, string, int, []byte) {
	return "ZADD", key, timestamp, media
}

// SetSetMediaForKey is used to send back the number of bets after
func (r *RedisMediaStore) SetSetMediaForKey(key string, media []byte) (string, string, []byte) {
	return "SADD", key, media
}
