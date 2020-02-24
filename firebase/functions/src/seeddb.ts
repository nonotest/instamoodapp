import * as firebase_tools from 'firebase-tools'
import * as admin from 'firebase-admin'

export async function cleanDb() {
  await firebase_tools.firestore.delete('medias', {
    project: 'instamooddev',
    recursive: true,
    yes: true
  })
}

export async function seedDb() {
  const mediasSeed = {
    medias: [
      {
        id: '1',
        mediaSourceName: 'instagram',
        moodName: 'angry',
        createdate: '25 mins',
        data: {
          url:
            'https://instagram.fper2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83805698_2335856130045708_8035490104761960510_n.jpg?_nc_ht=instagram.fper2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=mwNeAB5G7VMAX-G8qqg&oh=dd95b190379789f984c8efd2724b67aa&oe=5ED0624C',
          userId: 3
        }
      },
      {
        id: '2',
        createdate: '55 mins',
        mediaSourceName: 'meme-api',
        moodName: 'loving',
        data: {
          title: '*boss music intensifies*',
          url: 'https://i.redd.it/js6zmtiauze41.png'
        }
      },
      {
        id: '3',
        createdate: '30 mins',
        mediaSourceName: 'quotable',
        moodName: 'happy',
        data: {
          author: 'Barack Obama',
          content: 'The cynics may be the loudest voice'
        }
      },
      {
        id: '4',
        createdate: '45 mins',
        mediaSourceName: 'youtube',
        moodName: 'blessed',
        data: {
          username: 'Siti Badriah',
          videoId: 'Tet6_BlStEM'
        }
      },
      {
        id: '5',
        createdate: '55 mins',
        mediaSourceName: 'meme-api',
        moodName: 'loving',
        data: {
          title: 'We gotta help Satan out. Reddit assemble!',
          url: 'https://i.redd.it/7jkoihqyrye41.jpg'
        }
      }
    ]
  }

  // Add data before apply rules
  for (let i = 0; i < mediasSeed.medias.length; ++i) {
    const key = `medias/${mediasSeed.medias[i].id}`
    const ref = admin.firestore().doc(key)
    await ref.set(mediasSeed.medias[i])
  }
}
