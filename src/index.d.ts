// index.d.ts

// Export components
export { ScreenLayout, ThemedText, ThemedView } from './components';

// Export styles
export {
  alignItemsStyle,
  borderBottomLeftRadiusStyle,
  borderBottomRightRadiusStyle,
  borderBottomWidthStyle,
  borderLeftWidthStyle,
  borderRadiusStyle,
  borderRightWidthStyle,
  borderTopLeftRadiusStyle,
  borderTopRightRadiusStyle,
  borderTopWidthStyle,
  borderWidthStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  heightStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginHorizontalStyle,
  marginLeftStyle,
  marginRightStyle,
  marginStyle,
  marginTopStyle,
  marginVerticalStyle,
  paddingBottomStyle,
  paddingHorizontalStyle,
  paddingLeftStyle,
  paddingRightStyle,
  paddingStyle,
  paddingTopStyle,
  paddingVerticalStyle,
  positionStyle,
  ratioHeightStyle,
  ratioWidthStyle,
  shadowStyle,
  textAlignStyle,
  textFontSizeStyle,
  textFontWeightStyle,
  widthStyle
} from './styles';

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
  GenericColorPalette,
  Theme,
  ThemeContextType
} from './types';
