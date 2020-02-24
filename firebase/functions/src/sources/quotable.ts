const fetch = require('node-fetch')

import { rnd } from '../utils'

export async function scrapeForMood(
  mood: string
): Promise<{
  error: Object | undefined | null
  result: Object | undefined | null
}> {
  const url = `https://www.instagram.com/explore/tags/${mood}/?__a=1`
  const response = await fetch(url)
  const json = await response.json()
  if (json.error) {
    return {
      error: json.error,
      result: null
    }
  }

  const medias = json.graphql.hashtag.edge_hashtag_to_media.edges

  // random one for now..
  const idx = rnd(medias.length)
  const res = medias[idx]

  const displayUrl = res.node.display_url
  const media: Object = {
    data: {
      url: displayUrl
    },
    mediaSourceName: 'instagram',
    moodName: mood
  }

  return {
    error: null,
    result: media
  }
}
