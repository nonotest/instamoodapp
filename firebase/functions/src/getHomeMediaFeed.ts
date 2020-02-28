import * as functions from 'firebase-functions'
import * as fs from 'fs'
import redisClient from './redis'

type GetHomeMediaFeedRequest = {
  page?: number
  moods: string[]
  excludeSource?: string[]
}

type GetHomeMediaFeedResponse = {
  data: Array<Object> // Media
  hasNextPage: boolean
}

let lua = {
  find: {
    script: fs.readFileSync(`${__dirname}/../get-medias.lua`, {
      encoding: 'utf8'
    }),
    sha: null // This is set by lured.load()
  }
}
const lured = require('lured').create(redisClient, lua)

// getHomeMediaFeed({})
/**
 * curl -X POST https://us-central1-instamooddev.cloudfunctions.net/getHomeMediaFeed -H "Content-Type:application/json"  -d '{}'
 */
export const getHomeMediaFeed = functions.https.onCall(
  async (
    data: GetHomeMediaFeedRequest,
    context
  ): Promise<GetHomeMediaFeedResponse> => {
    try {
      const redisRes = (await getMedias(data)) as string[][]
      let medias = []
      for (let i = 0; i < redisRes.length; ++i) {
        for (let j = 0; j < redisRes[i].length; ++j) {
          const media: Object = JSON.parse(redisRes[i][j])
          console.log({ media })
          medias.push(media)
        }
      }

      medias = shuffle(medias)

      console.log('================')
      console.log('LENGHT:', medias.length)

      // const totalCount = await zcountAsnyc(mood, '-inf', '+inf')
      return {
        data: medias,
        hasNextPage: true //totalCount > nextOffset
      }
    } catch (e) {
      console.log('ERROR WHILE RUNNING Q:', { e })

      return {
        data: [],
        hasNextPage: false
      }
    }
  }
)

const getMedias = (data: GetHomeMediaFeedRequest) =>
  new Promise((resolve, reject) => {
    const currentPage = data.page || 0
    // let moods = data.moods && data.moods.length > 0 ? data.moods : []

    // 2 posts per "source"
    let postCountLeftToFetch: number = 2

    // Further refine.
    // should always be one

    const currentOffset =
      currentPage === 0 ? 0 : currentPage * postCountLeftToFetch
    const nextOffset = currentOffset + postCountLeftToFetch - 1 // 0 index inclusive
    // @ts-ignore
    lured.load(err => {
      if (err) {
        reject(err)
      }

      redisClient.evalsha(
        // @ts-ignore
        lua.find.sha,
        2,
        `${currentOffset}`,
        `${nextOffset}`,
        // @ts-ignore
        (e, data) => {
          if (e) {
            reject(e)
          }

          resolve(data)
        }
      )
    })
  })

/**const mediasJSON = (await zrevrangeAsync(
        mood,
        currentOffset,
        nextOffset
      )) as string[] */

function shuffle(array: Array<any>) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  // slice first 10

  return array.slice(0, 10)
}
