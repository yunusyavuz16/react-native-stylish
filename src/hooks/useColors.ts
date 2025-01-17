import { extendColors } from '../helpers/extendColors';
import type { CustomColorConfig } from '../types/custom-colors';
import { useTheme } from './useTheme';

let userDefinedColors: CustomColorConfig = { light: {}, dark: {} };

export const setCustomColors = (colors: CustomColorConfig) => {
  userDefinedColors = colors;
};

export const useColors = () => {
  const { theme } = useTheme();
  const extendedColors = extendColors(userDefinedColors);
  return extendedColors[theme];
};
