import React from 'react';

import AdFeedWidget from '../AdFeedWidget';
import InstagramMediaFeedWidget from '../InstagramMediaFeedWidget';
import QuotableMediaFeedWidget from '../QuotableMediaFeedWidget';
import MemeApiMediaFeedWidget from '../MemeApiMediaFeedWidget';
import YoutubeMediaFeedWidget from '../YoutubeMediaFeedWidget';

import {
  Media,
  MemeApiMedia,
  Mood,
  InstagramMedia,
  QuotableMedia,
  YoutubeMedia,
} from '../../../core';

type Props = {
  index: number;
  item: Media;
  mood: Mood;
};

function FeedItem({ index, item, mood }: Props) {
  let content = null;
  switch (item.media_source_name) {
    case 'instagram':
      content = (
        <InstagramMediaFeedWidget media={item as InstagramMedia} mood={mood} />
      );
      break;
    case 'meme-api':
      content = <MemeApiMediaFeedWidget media={item as MemeApiMedia} />;
      break;
    case 'quotable':
      content = <QuotableMediaFeedWidget media={item as QuotableMedia} />;
      break;
    case 'youtube':
      content = (
        <YoutubeMediaFeedWidget media={item as YoutubeMedia} mood={mood} />
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
