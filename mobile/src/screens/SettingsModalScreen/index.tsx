import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

type Props = {
  setVisible: (visible: boolean) => void;
};

function SettingsModalScreen({ setVisible }: Props) {
  return (
    <Modal onRequestClose={() => setVisible(false)}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={styles.topBar}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30 }}>Settings</Text>
            </View>
            <Icon name="close" size={26} onPress={() => setVisible(false)} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Sources</Text>
            <View>
              <CheckBox title="YouTube" checked />
            </View>
            <View>
              <CheckBox title="Instagram" checked />
            </View>
            <View>
              <CheckBox title="Quotable" checked />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

interface IStyles {
  safeAreaView: ViewStyle;
  topBar: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  safeAreaView: { flex: 1 },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default SettingsModalScreen;
