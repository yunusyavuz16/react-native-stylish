import { StyleSheet } from 'react-native';
import { useColors } from './useColors';

const useStyles = () => {
  const colors = useColors();

  return {
    screenBackground: StyleSheet.create({
      container: {
        backgroundColor: colors.background,
      },
    }),
    defaultTextColor: StyleSheet.create({
      text: {
        color: colors.gray800,
      },
    }).text,
  };
};

export default useStyles;
