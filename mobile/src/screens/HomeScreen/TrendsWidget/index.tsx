import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { useTheme } from '../../../themes';

const TRENDS = gql`
  {
    ts_trends(limit: 10, offset: 0, order_by: { score: desc }) {
      id
      hashtag
    }
  }
`;

function Trends() {
  const { loading, error, data } = useQuery(TRENDS);
  const { colors, fonts } = useTheme();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <ScrollView horizontal>
      {data.ts_trends.map(({ id, hashtag }) => (
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
