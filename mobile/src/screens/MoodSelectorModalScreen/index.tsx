import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableHighlight,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { useTheme } from '../../themes';
import { Mood } from '../../core';
import storage from '../../services/storage';
import {
  useDispatch,
  useStore,
  storeActions,
} from '../../context/StoreContext';

type Props = {
  setVisible: (visible: boolean) => void;
};

function MoodSelectorModalScreen({ setVisible }: Props) {
  const dispatch = useDispatch();
  const store = useStore();
  const [selectedMoods, setSelectedMoods] = useState<{ [key: string]: Mood }>(
    {},
  );
  const { colors } = useTheme();

  const onSelectMood = useCallback(
    mood => {
      setSelectedMoods(s => {
        if (s[mood.id]) {
          const { [mood.id]: value, ...withoutSecond } = s;
          return withoutSecond;
        } else {
          return {
            ...s,
            [mood.id]: mood,
          };
        }
      });
    },
    [selectedMoods],
  );

  const onPressSubmit = useCallback(async () => {
    const userMoods = Object.keys(selectedMoods).map(
      key => selectedMoods[key].name,
    );

    await storage.set('favouriteMoods', JSON.stringify(userMoods));

    dispatch({
      type: storeActions.USER_MOODS_RECEIVED,
      payload: { moods: userMoods },
    });
    setVisible(false);
  }, [selectedMoods]);

  const selectedMoodsCount = Object.keys(selectedMoods).length;
  const readyButtonDisabled = selectedMoodsCount < 2 || selectedMoodsCount > 5;

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => setVisible(false)}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}
        >
          <Text style={{ flex: 1, fontSize: 20, textAlign: 'center' }}>
            Get Started
          </Text>
          <Icon name="close" onPress={() => setVisible(false)} size={26} />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              padding: 6,
              borderColor: 'black',
              margin: 10,
              borderRadius: 6,
            }}
          >
            <View style={{ alignItems: 'flex-start', marginVertical: 4 }}>
              <Icon name="help" />
            </View>

            <Text style={{ fontSize: 16 }}>
              Moods are at the heart of Le Feed app. We tailor the content of
              the app based on your current selection of moods.
            </Text>
            <Text style={{ fontSize: 16 }}>
              Selected at least{' '}
              <Text style={{ textDecorationLine: 'underline' }}>2</Text> and up
              to <Text style={{ textDecorationLine: 'underline' }}>5</Text>{' '}
              moods.
            </Text>
          </View>
          <ScrollView>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              {store.moods.map((mood, i) => {
                return (
                  <TouchableHighlight
                    key={mood.name}
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: mood.linearGradient.colors[0],
                      margin: 10,
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      onSelectMood(mood);
                    }}
                    underlayColor={mood.linearGradient.colors[0]}
                  >
                    <View style={{ flex: 1 }}>
                      <View style={{ flex: 1 }}>
                        <View style={{ paddingTop: 5, paddingLeft: 5 }}>
                          <Text
                            style={{
                              textTransform: 'capitalize',
                              color: 'white',
                              fontSize: 20,
                            }}
                          >
                            {mood.name}
                          </Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'flex-end', margin: 5 }}>
                        {selectedMoods[mood.id] &&
                        selectedMoods[mood.id].id === mood.id ? (
                          <Icon color="white" name="check" />
                        ) : (
                          <Icon name="check-box-outline-blank" color="white" />
                        )}
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: colors.primary,
            }}
            titleStyle={{ color: colors.text }}
            disabled={readyButtonDisabled}
            title="Ready to see my feed"
            icon={{
              name: 'navigate-next',
              color: readyButtonDisabled === true ? 'grey' : 'white',
            }}
            iconRight
            onPress={onPressSubmit}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

interface IStyles {
  safeAreaView: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  safeAreaView: { flex: 1 },
});

export default MoodSelectorModalScreen;
