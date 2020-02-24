import React, { useEffect, useState, useRef } from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Icon } from 'react-native-elements';
import ViewPager from '@react-native-community/viewpager';

import MediaWidget from './MediaWidget';
import { Mood } from '../../core';
import { useDispatch, useStore } from '../../context/StoreContext';
import { getRandomMedia } from '../../services/firebase';

type Props = {
  mood: Mood;
  setVisible: (visible: boolean) => void;
};

function MoodModalScreen({ setVisible, mood }: Props) {
  const [fetching, setFetching] = useState(false);
  const viewPagerRef = useRef<ViewPager>(null);
  const dispatch = useDispatch();
  const store = useStore();

  async function fetchMoodMedia() {
    if (fetching === true) {
      return;
    }

    setFetching(true);

    const res = await getRandomMedia(mood.id);

    if (!res.error) {
      dispatch({
        type: 'MEDIA_RECEIVED',
        payload: {
          media: res,
        },
      });
    }
    // else display error
    setFetching(false);
  }

  // Load the initial media.
  useEffect(() => {
    fetchMoodMedia();
  }, []);

  // When we receive a media, advance the pager.
  useEffect(() => {
    viewPagerRef.current &&
      viewPagerRef.current.setPageWithoutAnimation(store.medias.length - 1);
  }, [store.medias]);

  return (
    <Modal onRequestClose={() => setVisible(false)}>
      <SafeAreaView style={styles.safeAreaView}>
        <View
          style={{ flex: 1, backgroundColor: mood.linearGradient.colors[0] }}
        >
          <View style={styles.topBar}>
            <Icon
              name="close"
              onPress={() => setVisible(false)}
              color="white"
            />
            <Text style={styles.navButtonText} onPress={fetchMoodMedia}>
              Next
            </Text>
          </View>
          <>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 5,
                }}
              >
                <Text style={{ fontSize: 50 }}>{mood.emoji}</Text>
              </View>

              {store.medias.length > 0 && (
                <ViewPager
                  orientation="horizontal"
                  ref={viewPagerRef}
                  initialPage={0}
                  style={{ flex: 1 }}
                  onPageScroll={e => {
                    // load new.
                    if (e.nativeEvent.position > store.medias.length - 1) {
                      fetchMoodMedia();
                    }
                  }}
                >
                  {store.medias.map((m, i) => (
                    <View key={`${m.id}-${i}`}>
                      <MediaWidget media={m} mediaTypeId={m.mediaTypeId} />
                    </View>
                  ))}
                  <View key="loader">
                    {fetching === true && <ActivityIndicator size="small" />}
                  </View>
                </ViewPager>
              )}

              <View style={styles.separator} />
              <View style={styles.buttons}>
                <View style={styles.buttonWrapper}>
                  <Icon
                    containerStyle={{ padding: 10 }}
                    name="thumb-up"
                    color="white"
                    size={30}
                    onPress={() => {}}
                    underlayColor="transparent"
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <Icon
                    containerStyle={{ padding: 10 }}
                    name="share"
                    color="white"
                    size={30}
                    onPress={() => {}}
                    underlayColor="transparent"
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <Icon
                    containerStyle={{ padding: 10 }}
                    name="thumb-down"
                    color="white"
                    size={30}
                    onPress={() => {}}
                    underlayColor="transparent"
                  />
                </View>
              </View>
            </View>
            <View style={styles.advertWrapper}>
              <View style={styles.advert}>
                <Text style={styles.advertText}>Advert</Text>
              </View>
            </View>
          </>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

interface IStyles {
  advert: ViewStyle;
  advertText: TextStyle;
  advertWrapper: ViewStyle;
  buttons: ViewStyle;
  buttonWrapper: ViewStyle;
  navButtonText: TextStyle;
  safeAreaView: ViewStyle;
  separator: ViewStyle;
  topBar: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  advert: {
    height: 50,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'lightgreen',
  },
  advertText: { fontSize: 20 },
  advertWrapper: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: { flex: 1, alignItems: 'center' },
  navButtonText: { color: 'white', fontSize: 20 },
  safeAreaView: { flex: 1 },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
  },
  topBar: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default MoodModalScreen;
