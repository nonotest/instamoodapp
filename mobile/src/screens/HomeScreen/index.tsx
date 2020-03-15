import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {} from 'react-native-elements';
import { NetworkStatus } from 'apollo-client';

import SettingsModalScreen from '../SettingsModalScreen';
import Text from '../../components/Typography/Text';
import { useTheme } from '../../themes';
import { useStore } from '../../context/StoreContext';

import { MemomedFeedItem } from './FeedItem';
import TrendsWidget from './TrendsWidget';
import { useGetMediasByTopTrendsQuery } from '../../generated/graphql';

const MEDIAS_PER_PAGE_COUNT = 20;
// const TOP_TRENDS_COUNT = 10

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  // Context State
  // const store = useStore();
  const { colors } = useTheme();
  const store = useStore();
  // Local State
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const {
    error,
    data,
    refetch,
    fetchMore,
    networkStatus,
  } = useGetMediasByTopTrendsQuery({
    variables: {
      limit: MEDIAS_PER_PAGE_COUNT,
      offset: 0,
      uniqueDeviceId: store.uniqueDeviceId,
    },
    notifyOnNetworkStatusChange: true,
  });
  if (!data || !data.read_top_medias_by_top_trends) {
    return null;
  }
  if (error) {
    return (
      <View style={[styles.screen, { backgroundColor: colors.primary }]}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <>
      <View style={[styles.screen, { backgroundColor: colors.primary }]}>
        <View style={styles.trendListWrapper}>
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

              fetchMore({
                variables: {
                  offset: data.read_top_medias_by_top_trends.length,
                  limit: MEDIAS_PER_PAGE_COUNT,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  // Don't do anything if there weren't any new items
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.read_top_medias_by_top_trends.length === 0
                  ) {
                    return previousResult;
                  }

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
              <MemomedFeedItem index={index} media={item} />
            )}
            data={data.read_top_medias_by_top_trends}
            ListFooterComponent={
              networkStatus === NetworkStatus.fetchMore && (
                <ActivityIndicator size="large" color="red" />
              )
            }
            initialNumToRender={20}
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

      {settingsModalVisible === true && (
        <SettingsModalScreen setVisible={setSettingsModalVisible} />
      )}
    </>
  );
};

interface IStyles {
  appTitle: ViewStyle;
  trendListWrapper: ViewStyle;
  screen: ViewStyle;
}
const styles = StyleSheet.create<IStyles>({
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  trendListWrapper: {
    height: 40,
    marginTop: 5,
  },
  screen: {
    flex: 1,
  },
});

export default HomeScreen;

// Get Dups if needed.
// const dups = [];
// previousResult.read_top_medias_by_top_trends.forEach(
//   element => {
//     const dup = fetchMoreResult.read_top_medias_by_top_trends.find(
//       el => el.uuid === element.uuid,
//     );
//     if (dup) {
//       dups.push(dup);
//     }
//   },
// );
// console.log('Dups: ', dups);
