export { createCustomStyles } from './helpers/createCustomStyles';
export { extendColors } from './helpers/extendColors';

export { ScreenLayout, ThemedText, ThemedView } from './components';

export {
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
  alignItemsStyle,
  borderBottomLeftRadiusStyle,
  borderBottomRightRadiusStyle,
  borderRadiusStyle,
  borderTopLeftRadiusStyle,
  borderTopRightRadiusStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  justifyContentStyle,
  positionStyle,
  shadowStyle,
  textAlignStyle,
  textFontWeightStyle,
  borderBottomWidthStyle,
  borderLeftWidthStyle,
  borderRightWidthStyle,
  borderTopWidthStyle,
  borderWidthStyle,
  heightStyle,
  ratioWidthStyle,
  ratioheightStyle,
  textFontSizeStyle,
  widthStyle,
} from './styles';

export { ThemeProvider, ThemeContext } from './context/ThemeContext';
export { useColors, setCustomColors } from './hooks/useColors';
export { useTheme } from './hooks/useTheme';
export { default as useStyles } from './hooks/useStyles';
export { Colors } from './constants/Colors';
export type {
  ColorPalette,
  CustomColorConfig,
  GenericColorPalette,
  NamedStyles,
  Theme,
  ThemeContextType,
} from './types';
