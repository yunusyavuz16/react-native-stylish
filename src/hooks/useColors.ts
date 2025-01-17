import { Colors } from "../constants/Colors";
import { useTheme } from "./useTheme";

export const useColors = () => {
  const { theme } = useTheme();
  return Colors[theme];
};
