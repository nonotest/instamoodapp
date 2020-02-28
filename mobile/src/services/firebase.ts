import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';

const COLLECTIONS = {
  MEDIA_SOURCES: 'mediaSources',
  MOODS: 'moods',
};

// TODO: add ignore stuff there
if (__DEV__) {
  functions().useFunctionsEmulator('http://localhost:5001');
}

/**
 * Listens to changes on the mediaSources collection.
 */
export function onMoodsChange(success, error) {
  const unsubscribe = firestore()
    .collection(COLLECTIONS.MOODS)
    .onSnapshot({
      error: e => error(e),
      next: querySnapshot => {
        const data = querySnapshot.docs.reduce((data, documentSnapshot) => {
          const {
            createdate,
            createdby,
            updatedby,
            lastupdate,
            ...otherKeys
          } = documentSnapshot.data();
          const row = {
            ...otherKeys,
            id: documentSnapshot.id,
          };

          // if we want to add runtime checks onthe data,
          // do that hre.
          data.push(row);

          return data;
        }, []);

        success(data);
      },
    });

  return unsubscribe;
}

/**
 * Listens to changes on the mediaSources collection.
 */
export function onMediaSourcesChange(success, error) {
  const unsubscribe = firestore()
    .collection(COLLECTIONS.MEDIA_SOURCES)
    .onSnapshot({
      error: e => error(e),
      next: querySnapshot => {
        const data = querySnapshot.docs.reduce((data, documentSnapshot) => {
          const {
            createdate,
            createdby,
            updatedby,
            lastupdate,
            ...otherKeys
          } = documentSnapshot.data();
          const row = {
            ...otherKeys,
            id: documentSnapshot.id,
          };

          // if we want to add runtime checks onthe data,
          // do that hre.
          data.push(row);

          return data;
        }, []);

        success(data);
      },
    });

  return unsubscribe;
}

/**
 * Retrives a list of trends.
 */
export async function getTrends() {
  try {
    const success = await functions().httpsCallable('getTrends')({});
    return success.data;
  } catch (e) {
    console.error(e);
  }
}

type FeedParams = {
  page: number;
  moods: string[];
};

/**
 * Retries a media for a mood.
 * @param params: {FeedParams}
 */
export async function getHomeMediaFeed(params: FeedParams) {
  try {
    const success = await functions().httpsCallable('getHomeMediaFeed')(params);

    return success.data;
  } catch (e) {
    console.error(e);
  }
}

const medias = [
  {
    id: '1',
    mediaSourceName: 'instagram',
    moodName: 'angry',
    createdate: {
      _seconds: 1312312321,
    },
    data: {
      url:
        'https://instagram.fper2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83805698_2335856130045708_8035490104761960510_n.jpg?_nc_ht=instagram.fper2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=mwNeAB5G7VMAX-G8qqg&oh=dd95b190379789f984c8efd2724b67aa&oe=5ED0624C',
      userId: 3,
    },
  },
  {
    id: '2',
    createdate: {
      _seconds: 1312312321,
    },
    mediaSourceName: 'meme-api',
    moodName: 'loving',
    data: {
      title: '*boss music intensifies*',
      url: 'https://i.redd.it/js6zmtiauze41.png',
    },
  },
  {
    id: '3',
    createdate: {
      _seconds: 1312312321,
    },
    mediaSourceName: 'quotable',
    moodName: 'happy',
    data: {
      author: 'Barack Obama',
      content: 'The cynics may be the loudest voice',
    },
  },
  {
    id: '4',
    createdate: {
      _seconds: 1312312321,
    },
    mediaSourceName: 'youtube',
    moodName: 'blessed',
    data: {
      username: 'Siti Badriah',
      videoId: 'Tet6_BlStEM',
    },
  },
  {
    id: '5',
    createdate: {
      _seconds: 1312312321,
    },
    mediaSourceName: 'meme-api',
    moodName: 'loving',
    data: {
      title: 'We gotta help Satan out. Reddit assemble!',
      url: 'https://i.redd.it/7jkoihqyrye41.jpg',
    },
  },
];
