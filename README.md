<h1 align="center">
  <img width="256" height="256" src="react-native-trendy.png"/><br/>
  React Native Trendy Library
</h1>

A powerful, customizable, and type-safe styling library for React Native applications that supports light and dark themes with ease.

---

## 🌟 Features

- **Dynamic Themes**: Supports light and dark mode with seamless transitions.
- **Type-safe**: Customizable color palettes and styles with full TypeScript support.
- **Predefined Styles**: Includes a wide range of reusable styles for borders, padding, margins, etc.
- **Customizable Components**: Prebuilt themed components like `ThemedText` and `ThemedView`.

---

## 🚀 Getting Started

### Installation

```bash
npm install react-native-trendy
```

or

```bash
yarn add react-native-trendy
```

---

## 📖 Usage

### Setting Up the Theme

Wrap your app with the `ThemeProvider` from `ThemeContext`:

```tsx
import React from 'react';
import { ThemeProvider } from 'react-native-trendy';
import { NewApp } from './App';

const App = () => (
  <ThemeProvider>
    <NewApp />
  </ThemeProvider>
);

export default App;
```

### Accessing Colors

Use the `useColors` hook to get the theme-specific colors:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from 'react-native-trendy';

const MyComponent = () => {
  const colors = useColors();

  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.text }}>Hello trendy World!</Text>
    </View>
  );
};

export default MyComponent;
```

### Using Custom Colors

```tsx
import { setCustomColors } from 'react-native-trendy';
import { TouchableOpacity } from 'react-native';


type MyCustomPalette = {
  customPrimary: string;
  customSecondary: string;
};

setCustomColors<MyCustomPalette>({
  light: {
    customPrimary: '#ff5733',
    customSecondary: '#57ff33',
  },
  dark: {
    customPrimary: '#5733ff',
    customSecondary: '#33c1ff',
  },
});

const CustomComponent = () => {
  const colors = useColors<MyCustomPalette>();

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.customSecondary,
        },
        paddingStyle.padding12,
        borderRadiusStyle.borderRadius12,
      ]}
      onPress={() => {}}
    >
      <ThemedText>React Native trendy</ThemedText>
    </TouchableOpacity>
  );
};
```

## 📦 Components

### `ThemedView`
A `View` component that adapts to the current theme.

```tsx
import { ThemedView } from 'react-native-trendy';

<ThemedView>
  <Text>Hello, Themed World!</Text>
</ThemedView>;
```

### `ThemedText`
A `Text` component that applies theme-specific styles.

```tsx
import { ThemedText } from 'react-native-trendy';

<ThemedText>Styled Text</ThemedText>;
```

## Hooks

### `useColors`

The `useColors` hook provides access to the current theme’s colors (light or dark). It returns the extended color palette, including both default and custom colors.

#### Usage:

```tsx
import { useColors } from 'your-library-name';

const MyComponent = () => {
  const colors = useColors();

  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.text }}>Hello, World!</Text>
    </View>
  );
};
```

### `useTheme`
The `useTheme` hook provides access to the current theme context. It is used internally by useColors but can also be used directly if needed.

#### Usage:

```tsx
import { useTheme } from 'your-library-name';

const MyComponent = () => {
  const { theme } = useTheme();

  return (
    <View>
      <Text>The current theme is: {theme}</Text>
    </View>
  );
};
```

### `useStyles`

The `useStyles` hook provides predefined style functions that are dynamically adjusted based on the current theme and color palette.

#### Usage:

```tsx
import useStyles from 'your-library-name';

const MyComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.containerBackgroundColorStyle}>
      <Text style={styles.textColorStyle}>Styled Text</Text>
    </View>
  );
};
```

## Predefined Styles

| **Style**                | **Value**  | **Example Usage**          |
|--------------------------|------------|----------------------------|
| **alignItems**              | Center, Start, End, Stretch  | `alignItemsStyle.alignItemsCenter` |
| **borderBottomLeftRadius**  | 0-32                         | `borderBottomLeftRadiusStyle.borderBottomLeftRadius1` |
| **borderBottomRightRadius** | 0-32                         | `borderBottomRightRadiusStyle.borderBottomRightRadius1` |
| **borderBottomWidth**       | 0-32                         | `borderBottomWidthStyle.borderBottomWidth1` |
| **borderLeftWidth**         | 0-32                         | `borderLeftWidthStyle.borderLeftWidth1` |
| **borderRadius**            | 0-32                         | `borderRadiusStyle.borderRadius1` |
| **borderRightWidth**        | 0-32                         | `borderRightWidthStyle.borderRightWidth1` |
| **borderTopLeftRadius**     | 0-32                         | `borderTopLeftRadiusStyle.borderTopLeftRadius1` |
| **borderTopRightRadius**    | 0-32                         | `borderTopRightRadiusStyle.borderTopRightRadius1` |
| **borderTopWidth**          | 0-32                         | `borderTopWidthStyle.borderTopWidth1` |
| **flex**                    | 1-32                         | `flexStyle.flex1` |
| **flexDirection**           | Row, Column, RowReverse, ColumnReverse | `flexDirectionStyle.flexDirectionRow` |
| **gap**                     | 0-32                         | `gapStyle.gap1` |
| **height**                  | 0, 4, 8, ..., 100           | `heightStyle.height40` |
| **justifyContent**          | Center, Start, End, SpaceBetween, SpaceAround | `justifyContentStyle.justifyContentCenter` |
| **margin**                  | -32, -31, -30, ..., 32       | `marginStyle.margin32` |
| **marginBottom**            | -32, -31, -30, ..., 32       | `marginStyle.marginBottom32` |
| **marginHorizontal**        | -32, -31, -30, ..., 32       | `marginStyle.marginHorizontal32` |
| **marginLeft**              | -32, -31, -30, ..., 32       | `marginStyle.marginLeft32` |
| **marginRight**             | -32, -31, -30, ..., 32       | `marginStyle.marginRight32` |
| **marginTop**               | -32, -31, -30, ..., 32       | `marginStyle.marginTop32` |
| **marginVertical**          | -32, -31, -30, ..., 32       | `marginStyle.marginVertical32` |
| **padding**                 | -32, -31, -30, ..., 32       | `paddingStyle.padding32` |
| **paddingBottom**           | -32, -31, -30, ..., 32       | `paddingStyle.paddingBottom32` |
| **paddingHorizontal**       | -32, -31, -30, ..., 32       | `paddingStyle.paddingHorizontal32` |
| **paddingLeft**             | -32, -31, -30, ..., 32       | `paddingStyle.paddingLeft32` |
| **paddingRight**            | -32, -31, -30, ..., 32       | `paddingStyle.paddingRight32` |
| **paddingTop**              | -32, -31, -30, ..., 32       | `paddingStyle.paddingTop32` |
| **paddingVertical**         | -32, -31, -30, ..., 32       | `paddingStyle.paddingVertical32` |
| **position**                | relative, absolute, fixed    | `positionStyle.positionRelative` |
| **ratioheight**             | 0%, 4%, 8%, ..., 100%        | `ratioheightStyle.height40` |
| **ratioWidth**              | 0%, 4%, 8%, ..., 100%        | `ratioWidthStyle.width40` |
| **shadow**                  | Color: #000, Offset: (0, 2), Opacity: 0.25, Radius: 3.84, Elevation: 5 | `shadowStyle.shadow` |
| **textAlign**               | center, left, right, justify | `textAlignStyle.textAlignCenter` |
| **textFontSize**            | 6, 8, 10, ..., 32            | `textFontSizeStyle.textFontSize6` |
| **textFontWeight**          | bold, 100, ..., 900, normal, light | `textFontWeightStyle.textFontWeightBold` |
| **width**                   | 0, 4, 8, ..., 100           | `widthStyle.width40` |

## Predefined Colors

Here is the list of predefined colors available in the library:

### Light Theme Colors

| Name                  | Hex Value   | Preview                               |
|-----------------------|-------------|---------------------------------------|
| `light`               | `#fff`      | ![#fff](https://placehold.co/15x15/fff/fff.png) |
| `dark`                | `#000`      | ![#000](https://placehold.co/15x15/000/000.png) |
| `screenBackground`    | `#EDF0F8`   | ![#EDF0F8](https://placehold.co/15x15/EDF0F8/EDF0F8.png) |
| `text`                | `#11181C`   | ![#11181C](https://placehold.co/15x15/11181C/11181C.png) |
| `primary`             | `#1B84FF`   | ![#1B84FF](https://placehold.co/15x15/1B84FF/1B84FF.png) |
| `lightPrimary`        | `#E9F3FF`   | ![#E9F3FF](https://placehold.co/15x15/E9F3FF/E9F3FF.png) |
| `danger`              | `#F8285A`   | ![#F8285A](https://placehold.co/15x15/F8285A/F8285A.png) |
| `lightDanger`         | `#FFEEF3`   | ![#FFEEF3](https://placehold.co/15x15/FFEEF3/FFEEF3.png) |
| `success`             | `#17C653`   | ![#17C653](https://placehold.co/15x15/17C653/17C653.png) |
| `lightSuccess`        | `#EAFFF1`   | ![#EAFFF1](https://placehold.co/15x15/EAFFF1/EAFFF1.png) |
| `secondary`           | `#F1F1F4`   | ![#F1F1F4](https://placehold.co/15x15/F1F1F4/F1F1F4.png) |
| `lightSecondary`      | `#F9F9F9`   | ![#F9F9F9](https://placehold.co/15x15/F9F9F9/F9F9F9.png) |
| `info`                | `#7239EA`   | ![#7239EA](https://placehold.co/15x15/7239EA/7239EA.png) |
| `lightInfo`           | `#F8F5FF`   | ![#F8F5FF](https://placehold.co/15x15/F8F5FF/F8F5FF.png) |
| `warning`             | `#F6C000`   | ![#F6C000](https://placehold.co/15x15/F6C000/F6C000.png) |
| `lightWarning`        | `#FFF8DD`   | ![#FFF8DD](https://placehold.co/15x15/FFF8DD/FFF8DD.png) |
| `brand`               | `#FF6F1E`   | ![#FF6F1E](https://placehold.co/15x15/FF6F1E/FF6F1E.png) |
| `lightBrand`          | `#FFF5EF`   | ![#FFF5EF](https://placehold.co/15x15/FFF5EF/FFF5EF.png) |
| `gray100`             | `#F9F9F9`   | ![#F9F9F9](https://placehold.co/15x15/F9F9F9/F9F9F9.png) |
| `gray200`             | `#F1F1F4`   | ![#F1F1F4](https://placehold.co/15x15/F1F1F4/F1F1F4.png) |
| `gray300`             | `#DBDFE9`   | ![#DBDFE9](https://placehold.co/15x15/DBDFE9/DBDFE9.png) |
| `gray400`             | `#C4CADA`   | ![#C4CADA](https://placehold.co/15x15/C4CADA/C4CADA.png) |
| `gray500`             | `#99A1B7`   | ![#99A1B7](https://placehold.co/15x15/99A1B7/99A1B7.png) |
| `gray600`             | `#78829D`   | ![#78829D](https://placehold.co/15x15/78829D/78829D.png) |
| `gray700`             | `#4B5675`   | ![#4B5675](https://placehold.co/15x15/4B5675/4B5675.png) |
| `gray800`             | `#252F4A`   | ![#252F4A](https://placehold.co/15x15/252F4A/252F4A.png) |
| `gray900`             | `#071437`   | ![#071437](https://placehold.co/15x15/071437/071437.png) |

### Dark Theme Colors

| Name                  | Hex Value   | Preview                               |
|-----------------------|-------------|---------------------------------------|
| `light`               | `#1a1b24`   | ![#1a1b24](https://placehold.co/15x15/1a1b24/1a1b24.png) |
| `dark`                | `#fff`      | ![#fff](https://placehold.co/15x15/fff/fff.png) |
| `screenBackground`    | `#1a1b24`   | ![#1a1b24](https://placehold.co/15x15/1a1b24/1a1b24.png) |
| `text`                | `#ECEDEE`   | ![#ECEDEE](https://placehold.co/15x15/ECEDEE/ECEDEE.png) |
| `primary`             | `#006AE6`   | ![#006AE6](https://placehold.co/15x15/006AE6/006AE6.png) |
| `lightPrimary`        | `#172331`   | ![#172331](https://placehold.co/15x15/172331/172331.png) |
| `danger`              | `#E42855`   | ![#E42855](https://placehold.co/15x15/E42855/E42855.png) |
| `lightDanger`         | `#302024`   | ![#302024](https://placehold.co/15x15/302024/302024.png) |
| `success`             | `#00A261`   | ![#00A261](https://placehold.co/15x15/00A261/00A261.png) |
| `lightSuccess`        | `#1F2623`   | ![#1F2623](https://placehold.co/15x15/1F2623/1F2623.png) |
| `secondary`           | `#363843`   | ![#363843](https://placehold.co/15x15/363843/363843.png) |
| `lightSecondary`      | `#363843`   | ![#363843](https://placehold.co/15x15/363843/363843.png) |
| `info`                | `#883FFF`   | ![#883FFF](https://placehold.co/15x15/883FFF/883FFF.png) |
| `lightInfo`           | `#272134`   | ![#272134](https://placehold.co/15x15/272134/272134.png) |
| `warning`             | `#C59A00`   | ![#C59A00](https://placehold.co/15x15/C59A00/C59A00.png) |
| `lightWarning`        | `#242320`   | ![#242320](https://placehold.co/15x15/242320/242320.png) |
| `brand`               | `#D74E00`   | ![#D74E00](https://placehold.co/15x15/D74E00/D74E00.png) |
| `lightBrand`          | `#272320`   | ![#272320](https://placehold.co/15x15/272320/272320.png) |
| `gray100`             | `#1B1C22`   | ![#1B1C22](https://placehold.co/15x15/1B1C22/1B1C22.png) |
| `gray200`             | `#26272F`   | ![#26272F](https://placehold.co/15x15/26272F/26272F.png) |
| `gray300`             | `#363843`   | ![#363843](https://placehold.co/15x15/363843/363843.png) |
| `gray400`             | `#464852`   | ![#464852](https://placehold.co/15x15/464852/464852.png) |
| `gray500`             | `#636674`   | ![#636674](https://placehold.co/15x15/636674/636674.png) |
| `gray600`             | `#808290`   | ![#808290](https://placehold.co/15x15/808290/808290.png) |
| `gray700`             | `#9A9CAE`   | ![#9A9CAE](https://placehold.co/15x15/9A9CAE/9A9CAE.png) |
| `gray800`             | `#B5B7C8`   | ![#B5B7C8](https://placehold.co/15x15/B5B7C8/B5B7C8.png) |
| `gray900`             | `#F5F5F5`   | ![#F5F5F5](https://placehold.co/15x15/F5F5F5/F5F5F5.png) |

---

## 🛠️ Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## ⚖️ License

This project is licensed under the MIT License. See the `LICENSE` file for details.