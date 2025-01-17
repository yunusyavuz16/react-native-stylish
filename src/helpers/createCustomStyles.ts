import { StyleSheet } from "react-native";
import { useColors } from "../hooks/useColors";
import type { ColorPalette } from "../types/custom-colors";
import type { NamedStyles } from "../types/named-styles";

export const createCustomStyles = <T extends NamedStyles<T>>(
  styleGenerator: (colors: ColorPalette) => T
): T => {
  const colors = useColors(); // Retrieve the current theme's colors
  return StyleSheet.create(styleGenerator(colors)); // Ensure generated styles are type-checked
};