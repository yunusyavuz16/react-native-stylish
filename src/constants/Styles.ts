import { StyleSheet } from 'react-native';

export const widthStyle = StyleSheet.create({
  width100: {
    width: '100%',
  },
  width50: {
    width: '50%',
  },
  width25: {
    width: '25%',
  },
  width75: {
    width: '75%',
  },
  constWidth25: {
    width: 25,
  },
  constWidth50: {
    width: 50,
  },
  constWidth75: {
    width: 75,
  },
  constWidth100: {
    width: 100,
  },
});

export const heightStyle = StyleSheet.create({
  height100: {
    height: '100%',
  },
  height50: {
    height: '50%',
  },
  height25: {
    height: '25%',
  },
  height75: {
    height: '75%',
  },
  constHeight25: {
    height: 25,
  },
  constHeight50: {
    height: 50,
  },
  constHeight75: {
    height: 75,
  },
  constHeight100: {
    height: 100,
  },
});

export const shadowStyle = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
