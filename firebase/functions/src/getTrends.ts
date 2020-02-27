import * as functions from 'firebase-functions'
import { promisify } from 'util'

import redisClient from './redis'

type GetTrendsRequest = {}

type Trend = {}

type GetTrendsResponse = {
  data: Trend[]
}

const zrevrangeAsync = promisify(redisClient.zrevrange).bind(redisClient)

// getTrends({})
/**
 * curl -X POST https://us-central1-instamooddev.cloudfunctions.net/getTrends -H "Content-Type:application/json"  -d '{}'
 */
export const getTrends = functions.https.onCall(
  async (data: GetTrendsRequest, context): Promise<GetTrendsResponse> => {
    try {
      // const totalCount = await zcountAsnyc(mood, '-inf', '+inf')
      const redisRes = (await zrevrangeAsync('trends', 0, -1)) as string[]

      let trends = []
      for (let i = 0; i < redisRes.length; ++i) {
        trends.push(JSON.parse(redisRes[i]))
      }

      return {
        data: trends
      }
    } catch (e) {
      console.log('ERROR WHILE RUNNING Q:', { e })

      return {
        data: []
      }
    }
  }
)
