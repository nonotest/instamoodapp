import * as redis from 'redis'

const REDISHOST = process.env.REDIS_HOST || 'localhost'
const redisClient = redis.createClient(6379, REDISHOST)
redisClient.on('error', err => console.error('ERR:REDIS:', err))

export default redisClient
