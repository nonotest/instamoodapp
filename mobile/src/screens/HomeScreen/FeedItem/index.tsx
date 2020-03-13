import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AdFeedWidget from '../AdFeedWidget';
import InstagramMediaFeedWidget from '../InstagramMediaFeedWidget';
import QuotableMediaFeedWidget from '../QuotableMediaFeedWidget';
import MemeApiMediaFeedWidget from '../MemeApiMediaFeedWidget';
import YoutubeMediaFeedWidget from '../YoutubeMediaFeedWidget';
import Header from './Header';
import { updateCache } from '../utils';
import { useStore } from '../../../context/StoreContext';
import { useTheme } from '../../../themes';
import {
  Read_Top_Medias_By_Top_Trends_Fn,
  useInsertTsMediaSentimentsMutation,
  useDeleteTsMediaSentimentsMutation,
} from '../../../generated/graphql';

import {
  MemeApiMedia,
  InstagramMediaVw,
  QuotableMedia,
  YoutubeMediaVw,
} from '../../../core';

type Props = {
  index: number;
  media: Read_Top_Medias_By_Top_Trends_Fn;
};

function FeedItem({ index, media }: Props) {
  const [handleInsertSentiment] = useInsertTsMediaSentimentsMutation();
  const [handleDeleteSentiment] = useDeleteTsMediaSentimentsMutation();
  const store = useStore();
  const { colors } = useTheme();

  // insert an ad.
  const idx = index + 1;
  if (idx % 6 === 0) {
    return <AdFeedWidget />;
  }

  // Get colors for sentiments.
  let likeColor = colors.text;
  let dislikeColor = colors.text;
  if (media.sentiment_type_id === 1 || media.sentiment_type_id === 2) {
    likeColor = colors.accent;
  }

  // handles a like or dislike press.
  const handleSentimentPress = (sentimentTypeId: number) => {
    // variables passed to the gql query.
    const vars = {
      mediaId: media.id,
      uniqueDeviceId: store.uniqueDeviceId,
      sentimentTypeId: sentimentTypeId,
    };

    if (media.sentiment_type_id === null) {
      // nothing exists.
      return handleInsertSentiment({
        variables: vars,
        update: updateCache('insert'),
      });
    }

    if (media.sentiment_type_id !== sentimentTypeId) {
      return alert('TODO: Only like or dislike...');
    }

    // existing
    return handleDeleteSentiment({
      variables: vars,
      update: updateCache('delete'),
    });
  };

  let content = null;
  let iconProps = {};

  switch (media.media_source_name) {
    case 'instagram':
      content = <InstagramMediaFeedWidget media={media as InstagramMediaVw} />;
      iconProps = { name: 'instagram', type: 'feather' };
      break;
    case 'meme-api':
      content = <MemeApiMediaFeedWidget media={media as MemeApiMedia} />;
      break;
    case 'quotable':
      content = <QuotableMediaFeedWidget media={media as QuotableMedia} />;
      break;
    case 'youtube':
      iconProps = { name: 'youtube', type: 'feather' };
      content = <YoutubeMediaFeedWidget media={media as YoutubeMediaVw} />;
      break;
  }

  return (
    <View style={styles.wrapper}>
      <Header iconProps={iconProps} media={media} />
      {content}
      {/* Footer */}
      <View style={styles.sentiments}>
        <FontAwesome5
          name="heart"
          style={[styles.sentimentIcon, { color: likeColor }]}
          solid
          onPress={() => handleSentimentPress(1)}
        />
        <Text style={[styles.sentimentCount, { color: likeColor }]}>
          {media.like_count}
        </Text>
        <FontAwesome5
          name="heart-broken"
          style={[styles.sentimentIcon, { color: dislikeColor }]}
          brand
          onPress={() => handleSentimentPress(2)}
        />
        <Text style={[styles.sentimentCount, { color: dislikeColor }]}>
          {media.dislike_count}
        </Text>
      </View>
    </View>
  );
}

interface IStyles {
  wrapper: ViewStyle;
  sentiments: ViewStyle;
  sentimentCount: TextStyle;
  sentimentIcon: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  sentiments: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  sentimentCount: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18,
  },
  sentimentIcon: {
    fontSize: 24,
    marginLeft: 10,
  },
  wrapper: {
    marginBottom: 5,
    width: '100%',
  },
});

export default FeedItem;
