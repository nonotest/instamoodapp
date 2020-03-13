import React, { useState, useRef, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import YouTubePlayer from 'react-native-youtube-sdk';
import { useAppState } from 'react-native-hooks';

import { YoutubeMediaVw } from '../../../core';

type Props = {
  media: YoutubeMediaVw;
};

const YoutubeMediaFeedWidget: React.FC<Props> = ({ media }) => {
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
    <View>
      {activityIndicator}
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <YouTubePlayer
          ref={youtubeRef}
          videoId={media.metadata.videoId} // video_id
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
  );
};

export default YoutubeMediaFeedWidget;
