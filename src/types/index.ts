import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export type { NamedStyles };
export type { ThemeContextType, Theme };
export type {
  ColorPalette,
  CustomColorConfig,
  GenericColorPalette,
} from './custom-colors';
