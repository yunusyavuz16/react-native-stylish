import type { Colors } from "../constants/Colors";

// Updated CustomColorConfig with Generics
export type CustomColorConfig<T extends GenericColorPalette = GenericColorPalette> = {
  light: Partial<T>;
  dark: Partial<T>;
};

// Updated ColorPalette Type
export type ColorPalette = (typeof Colors)['light']; // Default library colors

export type ExtendedColorPalette<T extends GenericColorPalette = ColorPalette> = T;

// Default GenericColorPalette Type
export type GenericColorPalette = Record<string, string>;
