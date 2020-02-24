import React from 'react';
import { Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';
import { MemeApiMedia } from '../../../core';

type Props = {
  media: MemeApiMedia;
};

function MemeApiMediaFeedWidget({ media }: Props) {
  return (
    <View style={{ marginBottom: 5, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Dank Memes
          </Text>
          <Text style={{ color: 'white' }}>
            <FirebaseDateWidget firebaseDate={media.createdate} />
          </Text>
        </View>
        <Icon name="more-horiz" color="white" />
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={{ width: '100%', height: 300 }}
          source={{ uri: media.data.url }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
          }}
        >
          <FontAwesome5
            name="heart"
            style={{ color: 'white', fontSize: 24 }}
            solid
          />

          <FontAwesome5
            name="heart-broken"
            style={{ color: 'white', fontSize: 24, marginLeft: 10 }}
            solid
          />
        </View>
      </View>
    </View>
  );
}

export default MemeApiMediaFeedWidget;
