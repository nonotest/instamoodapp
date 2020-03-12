import React from 'react';

import AdFeedWidget from '../AdFeedWidget';
import InstagramMediaFeedWidget from '../InstagramMediaFeedWidget';
import QuotableMediaFeedWidget from '../QuotableMediaFeedWidget';
import MemeApiMediaFeedWidget from '../MemeApiMediaFeedWidget';
import YoutubeMediaFeedWidget from '../YoutubeMediaFeedWidget';

import { Ts_Medias_By_Top_Trends_Vw } from '../../../generated/graphql';

import {
  MemeApiMedia,
  InstagramMediaVw,
  QuotableMedia,
  YoutubeMediaVw,
} from '../../../core';

type Props = {
  index: number;
  item: Ts_Medias_By_Top_Trends_Vw;
};

function FeedItem({ index, item }: Props) {
  let content = null;
  switch (item.media_source_name) {
    case 'instagram':
      content = <InstagramMediaFeedWidget media={item as InstagramMediaVw} />;
      break;
    case 'meme-api':
      content = <MemeApiMediaFeedWidget media={item as MemeApiMedia} />;
      break;
    case 'quotable':
      content = <QuotableMediaFeedWidget media={item as QuotableMedia} />;
      break;
    case 'youtube':
      content = <YoutubeMediaFeedWidget media={item as YoutubeMediaVw} />;
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
