import { createTheming } from '@callstack/react-theme-provider';
import DefaultTheme from './DefaultTheme';

const { ThemeProvider, withTheme, useTheme } = createTheming(DefaultTheme);

export { ThemeProvider, useTheme, withTheme };
