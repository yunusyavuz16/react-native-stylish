import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

// Define the valid style types in React Native
type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type { NamedStyles };
