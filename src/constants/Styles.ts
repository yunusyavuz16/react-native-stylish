import { StyleSheet } from "react-native";
import { Typography } from "./Typography";

export const borderBottomWidthStyle = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
  },
  borderBottom2: {
    borderBottomWidth: 2,
  },
  borderBottom3: {
    borderBottomWidth: 3,
  },
  borderBottom4: {
    borderBottomWidth: 4,
  },
});

export const borderWidthStyle = StyleSheet.create({
  boderWidth0: {
    borderWidth: 0,
  },
  borderWidth1: {
    borderWidth: 1,
  },
  borderWidth2: {
    borderWidth: 2,
  },
  borderWidth3: {
    borderWidth: 3,
  },
  borderWidth4: {
    borderWidth: 4,
  },
});



export const textFontSizeStyle = StyleSheet.create({
  textFontSizeSm: {
    fontSize: Typography.fontSizeSmall,
  },
  textFontSizeXmd: {
    fontSize: Typography.fontSizeSmallMedium,
  },
  textFontSizeMd: {
    fontSize: Typography.fontSizeMedium,
  },
  textFontSizeLg: {
    fontSize: Typography.fontSizeLarge,
  },
  textFontSizeXl: {
    fontSize: Typography.fontSizeExtraLarge,
  },
});



export const widthStyle = StyleSheet.create({
  width100: {
    width: "100%",
  },
  width50: {
    width: "50%",
  },
  width25: {
    width: "25%",
  },
  width75: {
    width: "75%",
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
    height: "100%",
  },
  height50: {
    height: "50%",
  },
  height25: {
    height: "25%",
  },
  height75: {
    height: "75%",
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

