import color from 'color';
import { black, white, magenta } from './colors';
import configureFonts from './fonts';
import iconConfig from './icons';

import { Theme } from './types';

const DarkTheme: Theme = {
  dark: true,
  roundness: 4,
  colors: {
    primary: black,
    accent: magenta,
    background: '#f6f6f6',
    surface: black,
    error: '#B00020',
    text: white,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(white)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(white)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(white)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: 'red',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  icons: iconConfig,
  buttons: {
    title: {
      fontSize: 18,
    },
  },
};

const LightTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: white,
    accent: magenta,
    background: '#f6f6f6',
    surface: white,
    error: '#B00020',
    text: black,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(white)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(white)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(white)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: 'red',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  icons: iconConfig,
  buttons: {
    title: {
      fontSize: 18,
    },
  },
};

const DefaultTheme = DarkTheme;

export default DefaultTheme;
