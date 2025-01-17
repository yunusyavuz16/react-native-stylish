import { StyleSheet } from 'react-native';

export const backgroundColorStyles = (backgroundColor: string) =>
  StyleSheet.create({
    backgroundColorStyle: {
      backgroundColor: backgroundColor,
    },
  });

export const textColorStyles = (textColor: string) =>
  StyleSheet.create({
    textColorStyle: {
      color: textColor,
    },
  });

export const borderColorStyles = (borderColor: string) =>
  StyleSheet.create({
    borderColorStyle: {
      borderColor: borderColor,
    },
  });
