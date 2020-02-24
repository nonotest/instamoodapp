import React from 'react';
import { View, Text } from 'react-native';

function AdFeedWidget({}) {
  return (
    <View
      style={{
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>Advertising</Text>
    </View>
  );
}

export default AdFeedWidget;
