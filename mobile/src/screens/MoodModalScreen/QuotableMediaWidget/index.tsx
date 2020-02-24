import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextStyle,
  ImageBackground,
} from 'react-native';
import { QuotableMedia } from '../../../core';

type Props = {
  media: QuotableMedia;
};

function QuotableMediaWidget({ media }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../../images/quotable-bg.jpg')}
        style={{ paddingHorizontal: 40, flex: 1, justifyContent: 'center' }}
      >
        <ScrollView style={{ maxHeight: 200 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              textDecorationLine: 'underline',
            }}
          >
            {media.author}
          </Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{media.content}</Text>
        </ScrollView>
      </ImageBackground>
      <View style={{ padding: 10 }}>
        <Text style={[styles.sourceText, { textAlign: 'center' }]}>Report</Text>
      </View>
    </View>
  );
}

interface IStyles {
  sourceText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  sourceText: {
    fontSize: 20,
    color: 'white',
  },
});

export default QuotableMediaWidget;
