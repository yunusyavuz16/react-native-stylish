import { Colors } from '../constants/Colors';
import type { ColorPalette, CustomColorConfig } from '../types/custom-colors';

export const extendColors = (
  customColors: CustomColorConfig
): { light: ColorPalette; dark: ColorPalette } => ({
  light: {
    ...Colors.light,
    ...customColors.light,
  },
  dark: {
    ...Colors.dark,
    ...customColors.dark,
  },
});
