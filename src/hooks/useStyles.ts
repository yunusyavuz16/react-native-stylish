import { StyleSheet } from "react-native";
import { useColors } from "./useColors";

const useStyles = () => {
  const colors = useColors();

  return {
    screenBackground: StyleSheet.create({
      container: {
        backgroundColor: colors.screenBackground,
      },
    }).container,
    textPrimary: StyleSheet.create({
      text: {
        color: colors.text,
      },
    }).text,
    // Diğer stiller...
  };
};

export default useStyles;
