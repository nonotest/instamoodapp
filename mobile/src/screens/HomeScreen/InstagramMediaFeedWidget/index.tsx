import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MoodBox from '../MoodBox';
import { InstagramMedia, Mood } from '../../../core';
import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';

type Props = {
  media: InstagramMedia;
  mood: Mood;
};

function InstagramMediaFeedWidget({ media, mood }: Props) {
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Instagram
            </Text>
            <Text style={{ color: 'white', fontWeight: '500' }}>
              {' '}
              • {media.trend_name}
            </Text>
          </View>
          <Text style={{ color: 'white' }}>
            <Text
              style={{ fontWeight: '500' }}
              onPress={() => {
                const app = `instagram://media?id=${media.exernal_id}`;
                Linking.openURL(app).catch(err => {
                  alert('Instagram is not installed.');
                });
              }}
            >
              Post{' '}
            </Text>
            • <FirebaseDateWidget firebaseDate={media.created_at} />
          </Text>
        </View>
        <Icon name="more-horiz" color="white" />
      </View>
      <View>
        <Image
          style={{ width: '100%', height: 300 }}
          source={{
            uri: media.metadata.url,
          }}
        />
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

export default InstagramMediaFeedWidget;
