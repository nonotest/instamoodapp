import React from 'react';

import AdFeedWidget from '../AdFeedWidget';
import InstagramMediaFeedWidget from '../InstagramMediaFeedWidget';
import QuotableMediaFeedWidget from '../QuotableMediaFeedWidget';
import MemeApiMediaFeedWidget from '../MemeApiMediaFeedWidget';
import YoutubeMediaFeedWidget from '../YoutubeMediaFeedWidget';
import { updateCache } from '../utils';
import { useStore } from '../../../context/StoreContext';
import { white } from '../../../themes/colors';

import {
  Read_Top_Medias_By_Top_Trends_Fn,
  useInsertTsMediaSentimentsMutation,
  useDeleteTsMediaSentimentsMutation,
} from '../../../generated/graphql';

import {
  MemeApiMedia,
  InstagramMediaVw,
  QuotableMedia,
  YoutubeMediaVw,
} from '../../../core';

type Props = {
  index: number;
  media: Read_Top_Medias_By_Top_Trends_Fn;
};

function FeedItem({ index, media }: Props) {
  let content = null;
  const [handleInsertSentiment] = useInsertTsMediaSentimentsMutation();
  const [handleDeleteSentiment] = useDeleteTsMediaSentimentsMutation();
  const store = useStore();

  let likeColor = white;
  let dislikeColor = white;

  if (media.sentiment_type_id === 1) {
    likeColor = 'rgb(237, 73, 86)';
  } else if (media.sentiment_type_id === 2) {
    dislikeColor = 'rgb(237, 73, 86)';
  }

  const handleSentimentPress = (sentimentTypeId: number) => {
    const vars = {
      mediaId: media.id,
      uniqueDeviceId: store.uniqueDeviceId,
      sentimentTypeId: sentimentTypeId,
    };

    if (media.sentiment_type_id === null) {
      // nothing exists.
      return handleInsertSentiment({
        variables: vars,
        update: updateCache('insert'),
      });
    }

    if (media.sentiment_type_id !== sentimentTypeId) {
      return alert('TODO: Only like or dislike...');
    }

    // existing
    return handleDeleteSentiment({
      variables: vars,
      update: updateCache('delete'),
    });
  };

  const sentimentsProps = {
    likeColor,
    dislikeColor,
    handleSentimentPress,
  };

  switch (media.media_source_name) {
    case 'instagram':
      content = (
        <InstagramMediaFeedWidget
          sentimentsProps={sentimentsProps}
          media={media as InstagramMediaVw}
        />
      );
      break;
    case 'meme-api':
      content = <MemeApiMediaFeedWidget media={media as MemeApiMedia} />;
      break;
    case 'quotable':
      content = <QuotableMediaFeedWidget media={media as QuotableMedia} />;
      break;
    case 'youtube':
      content = (
        <YoutubeMediaFeedWidget
          sentimentsProps={sentimentsProps}
          media={media as YoutubeMediaVw}
        />
      );
      break;
  }

  // insert an ad.
  const idx = index + 1;
  if (idx % 5 === 0) {
    content = (
      <>
        {content}
        <AdFeedWidget />
      </>
    );
  }

  return content;
}

export default FeedItem;
