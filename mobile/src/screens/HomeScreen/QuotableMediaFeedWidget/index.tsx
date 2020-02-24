import React from 'react';
import { ScrollView, ImageBackground, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { QuotableMedia } from '../../../core';

type Props = {
  media: QuotableMedia;
};

function QuotableMediaFeedWidget({ media }: Props) {
  return (
    <View style={{ marginBottom: 5, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Quotable
          </Text>
        </View>
        <Icon name="more-horiz" color="white" />
      </View>
      <View>
        <ImageBackground
          source={require('../../../images/quotable-bg.jpg')}
          style={{
            height: 300,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}
          >
            <ScrollView style={{ maxHeight: 175, marginBottom: 10 }}>
              <Text style={{ color: 'white', fontSize: 30 }}>
                {media.data.content}
              </Text>
            </ScrollView>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}
            >
              {media.data.author}
            </Text>
          </View>
        </ImageBackground>
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
    </View>
  );
}

export default QuotableMediaFeedWidget;
