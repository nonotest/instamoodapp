import React, { useState, useRef, useEffect } from 'react';
import { ActivityIndicator, Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import YouTubePlayer from 'react-native-youtube-sdk';
import { useAppState } from 'react-native-hooks';

import MoodBox from '../MoodBox';
import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';

import { Mood, YoutubeMedia } from '../../../core';

type Props = {
  media: YoutubeMedia;
  mood: Mood;
};

const YoutubeMediaFeedWidget: React.FC<Props> = ({ media, mood }) => {
  const [loading, setLoading] = useState(true);
  const youtubeRef = useRef<YouTubePlayer>(null);
  const currentAppState = useAppState();

  useEffect(() => {
    return () => {
      youtubeRef.current && youtubeRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (currentAppState !== 'active') {
      youtubeRef.current && youtubeRef.current.pause();
    }
  }, [currentAppState]);

  let activityIndicator;

  if (loading === true) {
    activityIndicator = (
      <ActivityIndicator size="small" style={{ marginBottom: 10 }} />
    );
  }

  return (
    <View style={{ marginBottom: 5, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="youtube"
          type="feather"
          color="white"
          containerStyle={{ marginRight: 5, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Youtube
            </Text>
            <MoodBox containerStyle={{ marginLeft: 10 }} mood={mood} />
          </View>
          <Text style={{ color: 'white' }}>
            <FirebaseDateWidget firebaseDate={media.insertedAt} />
          </Text>
        </View>
        <Icon name="more-horiz" color="white" />
      </View>
      <View>
        {activityIndicator}
        <View style={{ backgroundColor: 'black', flex: 1 }}>
          <YouTubePlayer
            ref={youtubeRef}
            videoId={media.data.videoId}
            autoPlay={false}
            fullscreen={false}
            showFullScreenButton={false}
            showSeekBar={true}
            showPlayPauseButton={true}
            style={{ width: '100%', height: 300 }}
            onReady={e => setLoading(false)}
          />
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
};

export default YoutubeMediaFeedWidget;
