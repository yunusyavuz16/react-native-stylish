import type { Colors } from '../constants/Colors';

export type GenericColorPalette = {
  [key: string]: string;
};

// Define the default color palette type
export type ColorPalette = (typeof Colors)['light'] & GenericColorPalette;

// Define the custom color configuration for both themes
export type CustomColorConfig = {
  light: Partial<ColorPalette>;
  dark: Partial<ColorPalette>;
};