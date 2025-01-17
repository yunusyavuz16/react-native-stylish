 type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type { ThemeContextType, Theme };
export type { ColorPalette, CustomColorConfig, GenericColorPalette } from './custom-colors';
export type { NamedStyles } from './named-styles';
