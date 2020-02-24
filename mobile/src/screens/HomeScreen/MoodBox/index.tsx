import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Mood } from '../../../core';

type Props = {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  mood: Mood;
};

function MoodBox({ containerStyle = {}, mood, textStyle = {} }: Props) {
  if (!mood || (mood && !mood.linearGradient)) {
    return <View />;
  }

  return (
    <LinearGradient
      style={[{ paddingHorizontal: 3, paddingVertical: 1 }, containerStyle]}
      {...mood.linearGradient}
    >
      <Text style={[{ color: 'white' }, textStyle]}>{mood.name}</Text>
    </LinearGradient>
  );
}

export default MoodBox;
