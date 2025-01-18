import { Colors } from '../constants/Colors';
import type { CustomColorConfig, GenericColorPalette } from '../types/custom-colors';

export const extendColors = <T extends GenericColorPalette>(
  customColors: CustomColorConfig<T>
): { light: T; dark: T } => ({
  light: {
    ...(Colors.light as GenericColorPalette), // Assert as GenericColorPalette
    ...(customColors.light as Partial<T>),   // Assert partial type compatibility
  } as T, // Final assertion to T
  dark: {
    ...(Colors.dark as GenericColorPalette),
    ...(customColors.dark as Partial<T>),
  } as T,
});
