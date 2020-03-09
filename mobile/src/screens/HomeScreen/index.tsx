import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { NetworkStatus } from 'apollo-client';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Mood, Media } from '../../core';
import MoodModalScreen from '../MoodModalScreen';
import MoodSelectorModalScreen from '../MoodSelectorModalScreen';
import SettingsModalScreen from '../SettingsModalScreen';
import { StoreProviderState } from '../../context/StoreContext';
import Text from '../../components/Typography/Text';
import { useTheme } from '../../themes';

import FeedItem from './FeedItem';
import TrendsWidget from './TrendsWidget';

type Feed = {
  read_top_medias_by_top_trends: Array<Media>;
};

const GET_MEDIAS = gql`
  query GetMediasByTopTrendsQuery($skip: Int!, $take: Int!) {
    read_top_medias_by_top_trends(args: { skip: $skip, take: $take }) {
      uuid
      external_id
      metadata
      media_source_name
      trend_name
      created_at
    }
  }
`;
const RECORDS_PER_TREND_COUNT = 4;
// const TOP_TRENDS_COUNT = 10

// todo: move to utils
const getMood = (
  item: Media,
  store: StoreProviderState,
): Mood | undefined | null => {
  if (!store.moods) {
    return null;
  }

  return store.moods.find(s => s.name === item.moodName);
};

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  // Context State
  // const store = useStore();
  const { colors, icons } = useTheme();
  // Local State
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [moodSelectorModalVisible, setMoodSelectorModalVisible] = useState(
    false,
  );

  const { error, data, refetch, fetchMore, networkStatus } = useQuery<Feed>(
    GET_MEDIAS,
    {
      variables: {
        skip: 0,
        take: RECORDS_PER_TREND_COUNT,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  // useEffect(() => {
  //   if (store.userMoods.length === 0) {
  //     setMoodSelectorModalVisible(true);
  //   }
  // }, []);
  if (data && data.read_top_medias_by_top_trends)
    console.log('Render Length: ', data.read_top_medias_by_top_trends.length);

  return (
    <>
      <View style={[styles.screen, { backgroundColor: colors.primary }]}>
        <View style={styles.appTitle}>
          <Text style={styles.appTitleText}>Le Feed</Text>
          <Icon
            name="settings"
            size={icons.regular.size}
            onPress={() => setMoodSelectorModalVisible(true)}
            color={colors.text}
          />
        </View>
        <View style={styles.moodListWrapper}>
          <TrendsWidget />
        </View>
        {networkStatus === NetworkStatus.loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator color="white" size="small" />
          </View>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={networkStatus === NetworkStatus.refetch}
                onRefresh={() => refetch()}
                tintColor={'red'}
              />
            }
            onEndReached={() => {
              if (networkStatus !== NetworkStatus.ready) {
                return;
              }
              const skip =
                data.read_top_medias_by_top_trends.length /
                  RECORDS_PER_TREND_COUNT +
                1;
              console.log(
                'Before Fetch More Length:',
                data.read_top_medias_by_top_trends.length,
              );
              console.log('Skip: ', skip);
              fetchMore({
                variables: {
                  skip,
                  take: RECORDS_PER_TREND_COUNT,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  // Don't do anything if there weren't any new items
                  console.log('Updated: ', fetchMoreResult);
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.read_top_medias_by_top_trends.length === 0
                  ) {
                    return previousResult;
                  }

                  const dups = [];
                  previousResult.read_top_medias_by_top_trends.forEach(
                    element => {
                      const dup = fetchMoreResult.read_top_medias_by_top_trends.find(
                        el => el.uuid === element.uuid,
                      );
                      if (dup) {
                        dups.push(dup);
                      }
                    },
                  );
                  console.log('Dups: ', dups);
                  return {
                    // Append the new feed results to the old one
                    read_top_medias_by_top_trends: previousResult.read_top_medias_by_top_trends.concat(
                      fetchMoreResult.read_top_medias_by_top_trends,
                    ),
                  };
                },
              });
            }}
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.uuid}
            renderItem={({ index, item }) => (
              <FeedItem
                index={index}
                item={item}
                mood={getMood(item, { moods: [] })}
              />
            )}
            data={data.read_top_medias_by_top_trends}
            ListFooterComponent={
              networkStatus === NetworkStatus.fetchMore && (
                <ActivityIndicator size="large" color="red" />
              )
            }
          />
        )}
        <View
          style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Advertising</Text>
        </View>
      </View>
      {/* {moodSelectorModalVisible === true && (
        <MoodSelectorModalScreen setVisible={setMoodSelectorModalVisible} />
      )} */}

      {settingsModalVisible === true && (
        <SettingsModalScreen setVisible={setSettingsModalVisible} />
      )}
    </>
  );
};

interface IStyles {
  appTitle: ViewStyle;
  appTitleText: TextStyle;
  moodListWrapper: ViewStyle;
  screen: ViewStyle;
}
const styles = StyleSheet.create<IStyles>({
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appTitleText: {
    fontSize: 30,
    fontFamily: 'Bradley Hand',
  },
  moodListWrapper: {
    height: 40,
    marginTop: 10,
  },
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
