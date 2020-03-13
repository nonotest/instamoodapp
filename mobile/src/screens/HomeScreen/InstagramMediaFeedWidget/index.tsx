import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { InstagramMediaVw } from '../../../core';
import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';
import { useStore } from '../../../context/StoreContext';
import { white } from '../../../themes/colors';
import {
  useInsertTsMediaSentimentsMutation,
  useDeleteTsMediaSentimentsMutation,
} from '../../../generated/graphql';

type Props = {
  media: InstagramMediaVw;
  trend?: any;
};

function InstagramMediaFeedWidget({ media, trend }: Props) {
  const store = useStore();
  const [handleInsertSentiment] = useInsertTsMediaSentimentsMutation();
  const [
    handleDeleteSentiment,
    deleteData,
  ] = useDeleteTsMediaSentimentsMutation();

  let likeColor = white;
  let dislikeColor = white;
  let likeHandler: any = handleInsertSentiment;
  let dislikeHandler: any = handleInsertSentiment;

  if (media.sentiment_type_id === 1) {
    likeColor = 'rgb(237, 73, 86)';
    likeHandler = handleDeleteSentiment;
    dislikeHandler = () => alert('cant');
  } else if (media.sentiment_type_id === 2) {
    dislikeColor = 'rgb(237, 73, 86)';
    dislikeHandler = handleDeleteSentiment;
    likeHandler = () => alert('cant');
  }

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
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center',
        }}
      >
        <FontAwesome5
          name="heart"
          style={{ color: likeColor, fontSize: 24 }}
          solid
          onPress={async () => {
            const ret = await likeHandler({
              variables: {
                mediaId: media.id,
                uniqueDeviceId: store.uniqueDeviceId,
                sentimentTypeId: 1,
              },
            });
          }}
        />
        <Text
          style={{
            color: likeColor,
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
            color: dislikeColor,
            fontSize: 24,
            marginLeft: 10,
          }}
          solid
          onPress={() =>
            dislikeHandler({
              variables: {
                mediaId: media.id,
                uniqueDeviceId: store.uniqueDeviceId,
                sentimentTypeId: 2,
              },
            })
          }
        />
        <Text
          style={{
            color: dislikeColor,
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
