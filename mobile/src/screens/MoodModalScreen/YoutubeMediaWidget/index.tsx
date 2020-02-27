import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import YouTubePlayer from 'react-native-youtube-sdk';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useAppState } from 'react-native-hooks';

import { YoutubeMedia } from '../../../core';

type Props = {
  media: YoutubeMedia;
};

const YoutubeMediaWidget: React.FC<Props> = ({ media }) => {
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
    <View style={{ flex: 1, alignItems: 'center', marginTop: 5 }}>
      {activityIndicator}
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <YouTubePlayer
          ref={youtubeRef}
          videoId={media.videoId}
          autoPlay={true}
          fullscreen={false}
          showFullScreenButton={true}
          showSeekBar={true}
          showPlayPauseButton={true}
          style={{ width: wp('100%'), height: '100%' }}
          onReady={e => setLoading(false)}
        />
      </View>
      <View style={styles.source}>
        <Text style={styles.sourceText}>Content from</Text>
        <Icon
          name="youtube"
          type="feather"
          color="white"
          containerStyle={{ marginRight: 5, marginLeft: 5 }}
        />
        <Text style={[styles.sourceText, { textDecorationLine: 'underline' }]}>
          Youtube |{' '}
        </Text>
        <Text style={styles.sourceText} onPress={() => alert('remove')}>
          Report
        </Text>
      </View>
    </View>
  );
};

interface IStyles {
  source: ViewStyle;
  sourceText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  sourceText: {
    fontSize: 20,
    color: 'white',
  },
});

export default YoutubeMediaWidget;
