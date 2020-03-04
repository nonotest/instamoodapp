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

import { Mood, Media } from '../../core';
import MoodModalScreen from '../MoodModalScreen';
import MoodSelectorModalScreen from '../MoodSelectorModalScreen';
import SettingsModalScreen from '../SettingsModalScreen';
import { useStore, StoreProviderState } from '../../context/StoreContext';
import Text from '../../components/Typography/Text';
import { getHomeMediaFeed } from '../../services/firebase';
import { useTheme } from '../../themes';

import FeedItem from './FeedItem';
import TrendsWidget from './TrendsWidget';

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
  const { colors, fonts, icons } = useTheme();
  // Local State
  const [moodModalVisible, setMoodModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [moodSelectorModalVisible, setMoodSelectorModalVisible] = useState(
    false,
  );

  const [mood, setMood] = useState<Mood | null>(null);
  const [medias, setMedias] = useState<Array<Media>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showRefreshingIndicator, setShowRefreshingIndicator] = useState(false);

  const dataIndex = useRef(0);
  const hasNextPage = useRef(true);

  const fetchData = async (reset: boolean) => {
    // let didCancel = false;

    if (reset === true) dataIndex.current = 0;

    if (dataIndex.current !== 0 && hasNextPage.current === false) return [];

    let params: { page: number; moods: string[] } = {
      page: dataIndex.current,
      moods: [],
    };

    const result = await getHomeMediaFeed(params);
    dataIndex.current++;
    hasNextPage.current = result.hasNextPage;

    return result.data;
  };

  const getInitialData = async () => {
    const data = await fetchData(false);
    if (!data) return;
    setMedias(data);
    setLoading(false);
  };

  const onEndReached = async () => {
    const newItems = await fetchData(false);
    if (!newItems.length) return;
    setMedias([...medias, ...newItems]);
  };

  const onRefresh = useCallback(async () => {
    setShowRefreshingIndicator(true);
    const newItems = await fetchData(true);
    setMedias(newItems);
    setShowRefreshingIndicator(false);
  }, [refreshing]);

  // useEffect(() => {
  //   if (store.userMoods.length === 0) {
  //     setMoodSelectorModalVisible(true);
  //   }
  // }, []);

  useEffect(() => {
    getInitialData();
  }, []);

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
        {loading === true ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator color="white" size="small" />
          </View>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={showRefreshingIndicator}
                onRefresh={onRefresh}
              />
            }
            onEndReached={() => {
              if (refreshing) return;
              setRefreshing(true);
              onEndReached().then(() => {
                setRefreshing(false);
              });
            }}
            onEndReachedThreshold={0.5}
            keyExtractor={item => `${item.internalId}`}
            renderItem={({ index, item }) => (
              <FeedItem
                index={index}
                item={item}
                mood={getMood(item, { moods: [] })}
              />
            )}
            data={medias}
            ListFooterComponent={
              refreshing && <ActivityIndicator size="small" />
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
      {moodModalVisible === true && (
        <MoodModalScreen mood={mood} setVisible={setMoodModalVisible} />
      )}
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
