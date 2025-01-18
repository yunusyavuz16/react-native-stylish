import {
  backgroundColorStyles,
  borderColorStyles,
  textColorStyles,
} from '../styles/functional-styles';
import { useColors } from './useColors';

const useStyles = () => {
  const colors = useColors();

  return {
    containerBackgroundColorStyle: backgroundColorStyles(
      colors.screenBackground
    ).backgroundColorStyle,
    backgroundColorStyle: backgroundColorStyles(colors.light)
      .backgroundColorStyle,
    darkBackgroundColorStyle: backgroundColorStyles(colors.dark),
    primaryBackgroundColorStyle: backgroundColorStyles(colors.primary)
      .backgroundColorStyle,
    lightPrimaryBackgroundColorStyle: backgroundColorStyles(colors.lightPrimary)
      .backgroundColorStyle,
    secondaryBackgroundColorStyle: backgroundColorStyles(colors.secondary)
      .backgroundColorStyle,
    lightSecondaryBackgroundColorStyle: backgroundColorStyles(
      colors.lightSecondary
    ).backgroundColorStyle,
    dangerBackgroundColorStyle: backgroundColorStyles(colors.danger)
      .backgroundColorStyle,
    lightDangerBackgroundColorStyle: backgroundColorStyles(colors.lightDanger)
      .backgroundColorStyle,
    warningBackgroundColorStyle: backgroundColorStyles(colors.warning)
      .backgroundColorStyle,
    lightWarningBackgroundColorStyle: backgroundColorStyles(colors.lightWarning)
      .backgroundColorStyle,
    infoBackgroundColorStyle: backgroundColorStyles(colors.info)
      .backgroundColorStyle,
    lightInfoBackgroundColorStyle: backgroundColorStyles(colors.lightInfo)
      .backgroundColorStyle,
    successBackgroundColorStyle: backgroundColorStyles(colors.success)
      .backgroundColorStyle,
    lightSuccessBackgroundColorStyle: backgroundColorStyles(colors.lightSuccess)
      .backgroundColorStyle,
    brandBackgroundColorStyle: backgroundColorStyles(colors.brand)
      .backgroundColorStyle,
    lightBrandBackgroundColorStyle: backgroundColorStyles(colors.lightBrand)
      .backgroundColorStyle,
    gray100BackgroundColorStyle: backgroundColorStyles(colors.gray100)
      .backgroundColorStyle,
    gray200BackgroundColorStyle: backgroundColorStyles(colors.gray200)
      .backgroundColorStyle,
    gray300BackgroundColorStyle: backgroundColorStyles(colors.gray300)
      .backgroundColorStyle,
    gray400BackgroundColorStyle: backgroundColorStyles(colors.gray400)
      .backgroundColorStyle,
    gray500BackgroundColorStyle: backgroundColorStyles(colors.gray500)
      .backgroundColorStyle,
    gray600BackgroundColorStyle: backgroundColorStyles(colors.gray600)
      .backgroundColorStyle,
    gray700BackgroundColorStyle: backgroundColorStyles(colors.gray700)
      .backgroundColorStyle,
    gray800BackgroundColorStyle: backgroundColorStyles(colors.gray800)
      .backgroundColorStyle,
    gray900BackgroundColorStyle: backgroundColorStyles(colors.gray900)
      .backgroundColorStyle,
    textColorStyle: textColorStyles(colors.text).textColorStyle,
    darkTextColorStyle: textColorStyles(colors.dark).textColorStyle,
    lightTextColorStyle: textColorStyles(colors.light).textColorStyle,
    primaryTextColorStyle: textColorStyles(colors.primary).textColorStyle,
    lightPrimaryTextColorStyle: textColorStyles(colors.lightPrimary)
      .textColorStyle,
    secondaryTextColorStyle: textColorStyles(colors.secondary).textColorStyle,
    lightSecondaryTextColorStyle: textColorStyles(colors.lightSecondary)
      .textColorStyle,
    dangerTextColorStyle: textColorStyles(colors.danger).textColorStyle,
    lightDangerTextColorStyle: textColorStyles(colors.lightDanger)
      .textColorStyle,
    warningTextColorStyle: textColorStyles(colors.warning).textColorStyle,
    lightWarningTextColorStyle: textColorStyles(colors.lightWarning)
      .textColorStyle,
    infoTextColorStyle: textColorStyles(colors.info).textColorStyle,
    lightInfoTextColorStyle: textColorStyles(colors.lightInfo).textColorStyle,
    successTextColorStyle: textColorStyles(colors.success).textColorStyle,
    lightSuccessTextColorStyle: textColorStyles(colors.lightSuccess)
      .textColorStyle,
    brandTextColorStyle: textColorStyles(colors.brand).textColorStyle,
    lightBrandTextColorStyle: textColorStyles(colors.lightBrand).textColorStyle,
    gray100TextColorStyle: textColorStyles(colors.gray100).textColorStyle,
    gray200TextColorStyle: textColorStyles(colors.gray200).textColorStyle,
    gray300TextColorStyle: textColorStyles(colors.gray300).textColorStyle,
    gray400TextColorStyle: textColorStyles(colors.gray400).textColorStyle,
    gray500TextColorStyle: textColorStyles(colors.gray500).textColorStyle,
    gray600TextColorStyle: textColorStyles(colors.gray600).textColorStyle,
    gray700TextColorStyle: textColorStyles(colors.gray700).textColorStyle,
    gray800TextColorStyle: textColorStyles(colors.gray800).textColorStyle,
    gray900TextColorStyle: textColorStyles(colors.gray900).textColorStyle,
    darkBorderColorStyle: borderColorStyles(colors.dark).borderColorStyle,
    lightBorderColorStyle: borderColorStyles(colors.light).borderColorStyle,
    primaryBorderColorStyle: borderColorStyles(colors.primary).borderColorStyle,
    lightPrimaryBorderColorStyle: borderColorStyles(colors.lightPrimary)
      .borderColorStyle,
    secondaryBorderColorStyle: borderColorStyles(colors.secondary)
      .borderColorStyle,
    lightSecondaryBorderColorStyle: borderColorStyles(colors.lightSecondary)
      .borderColorStyle,
    dangerBorderColorStyle: borderColorStyles(colors.danger).borderColorStyle,
    lightDangerBorderColorStyle: borderColorStyles(colors.lightDanger)
      .borderColorStyle,
    warningBorderColorStyle: borderColorStyles(colors.warning).borderColorStyle,
    lightWarningBorderColorStyle: borderColorStyles(colors.lightWarning)
      .borderColorStyle,
    infoBorderColorStyle: borderColorStyles(colors.info).borderColorStyle,
    lightInfoBorderColorStyle: borderColorStyles(colors.lightInfo)
      .borderColorStyle,
    successBorderColorStyle: borderColorStyles(colors.success).borderColorStyle,
    lightSuccessBorderColorStyle: borderColorStyles(colors.lightSuccess)
      .borderColorStyle,
    brandBorderColorStyle: borderColorStyles(colors.brand).borderColorStyle,
    lightBrandBorderColorStyle: borderColorStyles(colors.lightBrand)
      .borderColorStyle,
    gray100BorderColorStyle: borderColorStyles(colors.gray100).borderColorStyle,
    gray200BorderColorStyle: borderColorStyles(colors.gray200).borderColorStyle,
    gray300BorderColorStyle: borderColorStyles(colors.gray300).borderColorStyle,
    gray400BorderColorStyle: borderColorStyles(colors.gray400).borderColorStyle,
    gray500BorderColorStyle: borderColorStyles(colors.gray500).borderColorStyle,
    gray600BorderColorStyle: borderColorStyles(colors.gray600).borderColorStyle,
    gray700BorderColorStyle: borderColorStyles(colors.gray700).borderColorStyle,
    gray800BorderColorStyle: borderColorStyles(colors.gray800).borderColorStyle,
    gray900BorderColorStyle: borderColorStyles(colors.gray900).borderColorStyle,
  };
};

export { useStyles };
