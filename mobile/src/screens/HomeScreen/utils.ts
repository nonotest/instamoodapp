import { GetMediasByTopTrendsDocument } from '../../generated/graphql';

// todo: improve this.
export const updateCache = (updateType: string) => {
  let updateKey: string;
  let transform;
  if (updateType === 'insert') {
    updateKey = 'insert_ts_medias_sentiments';
    transform = (media: any, sentimentTypeId: number) => {
      const newMedia = { ...media };
      if (sentimentTypeId === 1) {
        newMedia.like_count++;
      } else {
        newMedia.dislike_count++;
      }
      newMedia.sentiment_type_id = sentimentTypeId;
      return newMedia;
    };
  } else {
    updateKey = 'delete_ts_medias_sentiments';
    transform = (media: any, sentimentTypeId) => {
      const newMedia = { ...media };
      if (sentimentTypeId === 1) {
        newMedia.like_count--;
      } else {
        newMedia.dislike_count--;
      }
      newMedia.sentiment_type_id = null;
      return newMedia;
    };
  }

  return (client, { data }) => {
    const d = data[updateKey];
    if (d.affected_rows === 0) {
      // no change
      return;
    } else if (d.affected_rows > 1) {
      // should only be one change
      console.log('error');
      return;
    }

    // find the cached data
    const cachedData = client.readQuery({
      query: GetMediasByTopTrendsDocument,
    });
    const ret = d.returning[0];
    const idx = cachedData.read_top_medias_by_top_trends.findIndex(
      media => media.id === ret.media_id,
    );
    const newData = {
      read_top_medias_by_top_trends: [
        ...cachedData.read_top_medias_by_top_trends,
      ],
    };

    // update
    newData.read_top_medias_by_top_trends[idx] = transform(
      newData.read_top_medias_by_top_trends[idx],
      ret.sentiment_type_id,
    );

    //affected_rows
    client.writeQuery({
      query: GetMediasByTopTrendsDocument,
      data: newData,
    });
  };
};
