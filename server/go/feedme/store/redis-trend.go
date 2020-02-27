package store

// RedisTrendStore is rdms.
type RedisTrendStore struct{}

// NewRedisTrendStore returns a rdms.
func NewRedisTrendStore() *RedisTrendStore {
	return &RedisTrendStore{}
}

// SetZRangeTrendForKey
func (r *RedisTrendStore) SetZRangeTrendForKey(timestamp int, trend []byte) (string, string, int, []byte) {
	return "ZADD", "trends", timestamp, trend
}

// SetSetTrendForKey
func (r *RedisTrendStore) SetSetTrendForKey(trend []byte) (string, string, []byte) {
	return "SADD", "trends", trend
}
