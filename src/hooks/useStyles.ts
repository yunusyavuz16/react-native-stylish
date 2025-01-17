import { StyleSheet } from 'react-native';
import { useColors } from './useColors';

const useStyles = () => {
  const colors = useColors();

  return {
    containerBackgroundColor: StyleSheet.create({
      container: {
        backgroundColor: colors.screenBackground,
      },
    }).container,
    backgroundColor: StyleSheet.create({
      backgroundColor: {
        backgroundColor: colors.background,
      },
    }).backgroundColor,
    defaultTextColor: StyleSheet.create({
      text: {
        color: colors.text,
      },
    }).text,
  };
};

export default useStyles;
