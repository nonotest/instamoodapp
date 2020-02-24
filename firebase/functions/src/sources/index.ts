import * as admin from 'firebase-admin'

export async function scrapeSources(
  uid: string | undefined
): Promise<{ [key: string]: string[] }> {
  // TOD: first request all the moods
  const sources = ['instagram']
  const moods = ['angry', 'blessed', 'happy', 'upset', 'loving']
  const done: { [key: string]: string[] } = {}
  // for each mood...
  for (let j = 0; j < sources.length; ++j) {
    done[sources[j]] = []
    for (let i = 0; i < moods.length; ++i) {
      const res = await scrapeSource(sources[j], moods[i])
      if (!res.error && res.result) {
        // insert in db unless it exists or it was deleted before
        // get ref

        // todo: transaction, delete all first then re-write?
        const final = {
          ...res.result,
          createdate: admin.firestore.FieldValue.serverTimestamp(),
          lastupdate: admin.firestore.FieldValue.serverTimestamp(),
          createdby: uid || 'admincron',
          updatedby: uid || 'admincron'
        }

        const ref = admin
          .firestore()
          .collection('medias')
          .doc()

        // add ref
        // todo: handle error
        await ref.set(final)
        done[sources[j]].push(moods[i])
      }
    }
  }

  return done
}

async function scrapeSource(
  source: string,
  mood: string
): Promise<{
  error: Object | undefined | null
  result: Object | undefined | null
}> {
  // nothing
  return Promise.resolve({ error: null, result: null })
}
