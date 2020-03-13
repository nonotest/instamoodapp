import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { InstagramMediaVw } from '../../../core';
import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';

type Props = {
  media: InstagramMediaVw;
  trend?: any;
  sentimentsProps: any;
};

function InstagramMediaFeedWidget({ media, sentimentsProps }: Props) {
  return (
    <View style={{ marginBottom: 5, width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 3,
          paddingBottom: 5,
        }}
      >
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
                const app = `instagram://media?id=${media.external_id}`;
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
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center',
          paddingHorizontal: 15,
        }}
      >
        <FontAwesome5
          name="heart"
          style={{ color: sentimentsProps.likeColor, fontSize: 24 }}
          solid
          onPress={() => sentimentsProps.handleSentimentPress(1)}
        />
        <Text
          style={{
            color: sentimentsProps.likeColor,
            marginLeft: 5,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {media.like_count}
        </Text>
        <FontAwesome5
          name="heart-broken"
          style={{
            color: sentimentsProps.dislikeColor,
            fontSize: 24,
            marginLeft: 10,
          }}
          solid
          onPress={() => sentimentsProps.handleSentimentPress(2)}
        />
        <Text
          style={{
            color: sentimentsProps.dislikeColor,
            fontWeight: 'bold',
            marginLeft: 5,
            fontSize: 18,
          }}
        >
          {media.dislike_count}
        </Text>
      </View>
    </View>
  );
}

export default InstagramMediaFeedWidget;
