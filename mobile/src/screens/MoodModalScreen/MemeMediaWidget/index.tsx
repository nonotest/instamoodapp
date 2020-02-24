import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { MemeMedia } from '../../../core';

type Props = {
  media: MemeMedia;
};

function MemeMediaWidget({ media }: Props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
      }}
    >
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: media.url }}
          />
        </View>
      </View>
      <View style={styles.source}>
        <Text style={styles.sourceText} onPress={() => alert('remove')}>
          Report
        </Text>
      </View>
    </View>
  );
}

interface IStyles {
  image: ImageStyle;

  source: ViewStyle;

  sourceText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  image: {
    width: wp('100%'),
    height: '100%',
  },

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

export default MemeMediaWidget;
