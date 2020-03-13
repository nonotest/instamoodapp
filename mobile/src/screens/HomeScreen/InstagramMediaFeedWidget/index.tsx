import React from 'react';
import { Image, View } from 'react-native';

import { InstagramMediaVw } from '../../../core';

type Props = {
  media: InstagramMediaVw;
};

function InstagramMediaFeedWidget({ media }: Props) {
  return (
    <View>
      <Image
        style={{ width: '100%', height: 300 }}
        source={{
          uri: media.metadata.url,
        }}
        resizeMode="contain"
      />
    </View>
  );
}

export default InstagramMediaFeedWidget;
