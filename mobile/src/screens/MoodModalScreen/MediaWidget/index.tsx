import React from 'react';
import { View, Text } from 'react-native';

import YoutubeMediaWidget from '../YoutubeMediaWidget';
import QuotableMediaWidget from '../QuotableMediaWidget';
import InstagramMediaWidget from '../InstagramMediaWidget';
import MemeMediaWidget from '../MemeMediaWidget';

import {
  Media,
  QuotableMedia,
  InstagramMedia,
  YoutubeMedia,
  MemeMedia,
} from '../../../core';

type Props = {
  media: Media;
  mediaTypeId: number;
};

function MediaWidget({ mediaTypeId, media }: Props) {
  switch (mediaTypeId) {
    case 1:
      return <YoutubeMediaWidget media={media as YoutubeMedia} />;
    case 2:
      return <InstagramMediaWidget media={media as InstagramMedia} />;
    case 3:
      return <QuotableMediaWidget media={media as QuotableMedia} />;
    case 4:
      return <MemeMediaWidget media={media as MemeMedia} />;
    default:
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
  }
}

export default MediaWidget;
