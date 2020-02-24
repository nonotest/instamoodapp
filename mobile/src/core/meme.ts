import { MemeApiMedia } from './medias';
// Make sure the client is loaded and sign-in  is complete before calling this method.
export async function execute(
  q: string,
): Promise<{
  error: Object | null | undefined;
  result: MemeApiMedia | null | undefined;
}> {
  const url = `https://meme-api.herokuapp.com/gimme/dankmemes`;
  const response = await fetch(url);
  const json = await response.json();
  if (json.error) {
    return {
      error: json.error,
      result: null,
    };
  }

  return {
    error: null,
    result: {
      data: {
        title: json.title,
        url: json.url,
      },

      mediaSourceName: 'meme-api',
      id: 'Eqweqeewq',
      moodName: 'angry',
    },
  };
}
