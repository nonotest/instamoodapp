import React from 'react';
import {
  Linking,
  View,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Icon } from 'react-native-elements';
import FirebaseDateWidget from '../../../components/FirebaseDateWidget/index';
import { useTheme } from '../../../themes';

function Header({ iconProps, media }) {
  const { colors } = useTheme();
  return (
    <View style={styles.wrapper}>
      <Icon
        {...iconProps}
        color={colors.text}
        containerStyle={styles.iconContainer}
      />
      <View style={styles.metasWrapper}>
        <View style={styles.metasTitlesWrapper}>
          <Text style={[styles.sourceName, { color: colors.text }]}>
            {media.media_source_name}
          </Text>
          <Text style={[styles.trendName, { color: colors.text }]}>
            {' '}
            • {media.trend_name}
          </Text>
        </View>
        <Text style={[styles.link, { color: colors.text }]}>
          <Text
            style={styles.linkText}
            onPress={() => {
              const app = `instagram://media?id=${media.external_id}`;
              Linking.openURL(app).catch(err => {
                alert('Instagram is not installed.');
              });
            }}
          >
            Link{' '}
          </Text>
          • <FirebaseDateWidget firebaseDate={media.created_at} />
        </Text>
      </View>
      <Icon name="more-horiz" color={colors.text} />
    </View>
  );
}

interface IStyles {
  iconContainer: ViewStyle;
  link: TextStyle;
  linkText: TextStyle;
  metasTitlesWrapper: ViewStyle;
  metasWrapper: ViewStyle;
  sourceName: TextStyle;
  trendName: TextStyle;
  wrapper: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  iconContainer: {
    marginRight: 5,
    marginLeft: 5,
  },
  link: {},
  linkText: {
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  metasTitlesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metasWrapper: { flex: 1 },
  sourceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trendName: {
    fontWeight: '500',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingBottom: 5,
  },
});

export default Header;
