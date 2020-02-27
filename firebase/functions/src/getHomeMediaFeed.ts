import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as redis from 'redis'
// import * as util from 'util'

admin.initializeApp(functions.config().firebase)

const REDISHOST = process.env.REDIS_HOST || 'localhost'
const redisClient = redis.createClient(6379, REDISHOST)
redisClient.on('error', err => console.error('ERR:REDIS:', err))

const dateSources = ['instagram']
// const randomSources = ['quotable']

// always need a even number
const allMoods = [
  'angry',
  'happy',
  'upset',
  'loving',
  'blessed',
  'scenery',
  'beauty'
]

type GetHomeMediaFeedRequest = {
  page?: number
  moods: string[]
  excludeSource?: string[]
}

type GetHomeMediaFeedResponse = {
  data: Array<Object> // Media
  hasNextPage: boolean
}

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
      const redisRes = (await getMedias(data)) as string[] | Object[]
      let medias = []
      for (let i = 0; i < redisRes.length; ++i) {
        if (typeof redisRes[i] === 'string') {
          const json = redisRes[i] as string
          const media: Object = JSON.parse(json)
          medias.push(media)
        } else if (typeof redisRes[i] === 'object') {
          const mediasJSON = redisRes[i] as string[]
          for (let j = 0; j < mediasJSON.length; ++j) {
            const media: Object = JSON.parse(mediasJSON[j])
            medias.push(media)
          }
        }
      }

      medias = shuffle(medias)

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
    let moods = data.moods && data.moods.length > 0 ? data.moods : allMoods
    moods = ['angry']
    const multi = redisClient.multi()

    // should always be 10
    let postCountLeftToFetch: number = 10

    // add in required random records
    const postFromRandomSourcePerPage = 0
    for (let i = 0; i < postFromRandomSourcePerPage; ++i) {
      multi.srandmember('quotable')
    }

    // post left to fetch, remove random count
    postCountLeftToFetch = postCountLeftToFetch - postFromRandomSourcePerPage

    // Further refine.
    // should always be one

    // todo: quotient for this too
    postCountLeftToFetch = postCountLeftToFetch / dateSources.length
    // TODO: Remainder if we need to complete.
    // let remainder = postCountLeftToFetch % moods.length
    postCountLeftToFetch = Math.floor(postCountLeftToFetch / moods.length)

    const currentOffset =
      currentPage === 0 ? 0 : currentPage * postCountLeftToFetch
    const nextOffset = currentOffset + postCountLeftToFetch - 1 // 0 index inclusive

    for (let j = 0; j < moods.length; ++j) {
      multi.zrevrange(`instagram-${moods[j]}`, currentOffset, nextOffset)
    }

    for (let j = 0; j < moods.length; ++j) {
      multi.zrevrange(`youtube-${moods[j]}`, currentOffset, nextOffset)
    }

    // later, we can complete the posts if needed
    // for (let j = 0; j < remainder; ++j) {
    //   console.log(`instagram-${moods[j]}`)
    //   multi.zrevrange(`instagram-${moods[j]}`, currentOffset, nextOffset)
    // }

    multi.exec((err, response) => {
      if (err) reject(err)
      resolve(response)
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
