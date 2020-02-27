import React from 'react';
import { Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TimeAgo from 'react-native-timeago';

import { InstagramMedia } from '../../../core/medias';

type Props = {
  media: InstagramMedia;
};

function TestIG({ media }: Props) {
  return (
    <View style={{ marginBottom: 5, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="instagram"
          type="feather"
          color="white"
          containerStyle={{ marginRight: 5, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Instagram
          </Text>
          <Text style={{ color: 'white' }}>
            @{media.username} • {media.createdate}
          </Text>
        </View>
        <Icon name="more-horiz" color="white" />
      </View>
      <View>
        <Image
          style={{ width: '100%', height: 300 }}
          source={{
            uri: media.url,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            padding: 5,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        >
          <Text style={{ color: 'white' }}>{mood.name}</Text>
        </View>
      </View>
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
  );
}

export default TestIG;
