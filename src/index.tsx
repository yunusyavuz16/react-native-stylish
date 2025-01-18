// index.d.ts

export {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  justifyContentStyle
} from './styles/flex-styles';

export {
  borderBottomLeftRadiusStyle,
  borderBottomRightRadiusStyle,
  borderBottomWidthStyle,
  borderLeftWidthStyle,
  borderRadiusStyle,
  borderRightWidthStyle,
  borderTopLeftRadiusStyle,
  borderTopRightRadiusStyle,
  borderTopWidthStyle,
  borderWidthStyle
} from './styles/border-styles';

export {
  marginBottomStyle,
  marginHorizontalStyle,
  marginLeftStyle,
  marginRightStyle,
  marginStyle,
  marginTopStyle,
  marginVerticalStyle
} from './styles/margin-styles';

export {
  paddingBottomStyle,
  paddingHorizontalStyle,
  paddingLeftStyle,
  paddingRightStyle,
  paddingStyle,
  paddingTopStyle,
  paddingVerticalStyle
} from './styles/padding-styles';

export { positionStyle } from './styles/position-styles';

export { shadowStyle } from './styles/shadow-styles';

export {
  textAlignStyle,
  textFontSizeStyle,
  textFontWeightStyle
} from './styles/text-styles';

export { heightStyle, ratioHeightStyle } from './styles/height-styles';

export { ratioWidthStyle, widthStyle } from './styles/width-styles';

// Export components
export { ScreenLayout } from './components/ScreenLayout';
export { ThemedText } from './components/ThemedText';
export { ThemedView } from './components/ThemedView';

// Export constants
export { Colors } from './constants/Colors';

// Export context
export { ThemeContext, ThemeProvider } from './context/ThemeContext';

// Export hooks
export { setCustomColors, useColors } from './hooks/useColors';
export { default as useStyles } from './hooks/useStyles';
export { useTheme } from './hooks/useTheme';

// Export types
export type {
  ColorPalette,
  CustomColorConfig,
  ExtendedColorPalette,
  GenericColorPalette
} from './types/custom-colors';
export type { Theme, ThemeContextType } from './types/index';

