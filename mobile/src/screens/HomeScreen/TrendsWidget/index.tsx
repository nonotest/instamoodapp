import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { useGetTsTopTrendsQuery } from '../../../generated/graphql';
import { useTheme } from '../../../themes';

function Trends() {
  const { loading, error, data } = useGetTsTopTrendsQuery();
  const { colors, fonts } = useTheme();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <ScrollView horizontal style={{ paddingHorizontal: 2 }}>
      {data.ts_top_trends_vw.map(({ id, hashtag }) => (
        <Button
          key={id}
          title={`${hashtag}`}
          titleStyle={{
            textTransform: 'capitalize',
            color: colors.text,
            ...fonts.medium,
          }}
          buttonStyle={{
            paddingVertical: 4,
            backgroundColor: 'rgb(29, 161, 242)',
          }}
          containerStyle={{
            marginHorizontal: 10,
          }}
          onPress={() => {}}
          iconRight
          icon={{ name: 'close', color: 'white' }}
        />
      ))}
    </ScrollView>
  );
}

export default Trends;
