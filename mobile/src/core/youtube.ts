import { rnd } from './math';
import { YoutubeMedia } from './medias';

// const key = 'AIzaSyDeXIC7XNPDsF_F5ADInGvjT3FI_oMnexQ';
const key = 'AIzaSyCwLBjR7pIxVPKevjbIP0qj8vkxyUZUuKo';

// Make sure the client is loaded and sign-in  is complete before calling this method.
export async function execute(
  q: string,
): Promise<{
  error: Object | null | undefined;
  result: YoutubeMedia | null | undefined;
}> {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${key}`;
  const response = await fetch(url);
  const json = await response.json();
  if (json.error) {
    return {
      error: json.error,
      result: null,
    };
  }

  const idx = rnd(json.items.length);
  const res = json.items[idx];

  return {
    error: null,
    result: {
      data: {
        username: 'bla',
        videoId: res.id.videoId,
      },
      moodName: 'blessed',
      mediaSourceName: 'youtube',
      id: 'Ewqeqweqweqw',
    },
  };
}
