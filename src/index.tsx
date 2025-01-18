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

// Export types
export type {
  ColorPalette,
  CustomColorConfig,
  ExtendedColorPalette,
  GenericColorPalette
} from './types/custom-colors';
export type { Theme, ThemeContextType } from './types/index';

