import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { InstagramMediaVw } from '../../../core';

type Props = {
  media: InstagramMediaVw;
};

function InstagramMediaFeedWidget({ media }: Props) {
  return (
    <View>
      <FastImage
        style={{ width: '100%', height: 300 }}
        source={{
          uri: media.metadata.url,
        }}
        resizeMode="contain"
        onError={() => console.log('err')}
      />
    </View>
  );
}

export default InstagramMediaFeedWidget;
