import { extendColors } from '../helpers/extendColors';
import type {
  ColorPalette,
  CustomColorConfig,
  GenericColorPalette,
} from '../types/custom-colors';
import { useTheme } from './useTheme';

let userDefinedColors: CustomColorConfig = { light: {}, dark: {} };

// Update `setCustomColors` to allow user to pass their own custom colors
export const setCustomColors = <T extends GenericColorPalette>(
  colors: CustomColorConfig<T>
) => {
  userDefinedColors = colors;
};

// Ensure that `useColors` returns the extended colors, including both default and custom colors
export const useColors = <T extends GenericColorPalette = ColorPalette>() => {
  const { theme } = useTheme();
  const extendedColors = extendColors<T>(
    userDefinedColors as CustomColorConfig<T>
  );
  return extendedColors[theme] as T & ColorPalette;
};
