<h1 align="center">
  <img width="256" height="256" src="react-native-stylish.png"/><br/>
  React Native Stylish Library
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
npm install react-native-stylish
```

or

```bash
yarn add react-native-stylish
```

### Peer Dependencies

Ensure the following dependencies are installed in your project:

```json
{
  "react": "^18.0.0",
  "react-native": "^0.71.0"
}
```

---

## 📖 Usage

### Setting Up the Theme

Wrap your app with the `ThemeProvider` from `ThemeContext`:

```tsx
import React from 'react';
import { ThemeProvider } from 'react-native-stylish/context/ThemeContext';
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
import { useColors } from 'react-native-stylish/hooks/useColors';

const MyComponent = () => {
  const colors = useColors();

  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.text }}>Hello Stylish World!</Text>
    </View>
  );
};

export default MyComponent;
```

### Defining Custom Colors

```tsx
import { setCustomColors } from 'react-native-stylish/hooks/useColors';

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
```

### Using Custom Colors

```tsx
import { setCustomColors } from 'react-native-stylish/hooks/useColors';
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
      <ThemedText>React Native Stylish</ThemedText>
    </TouchableOpacity>
  );
};
```

## 📦 Components

### `ThemedView`
A `View` component that adapts to the current theme.

```tsx
import { ThemedView } from 'react-native-stylish/components/ThemedView';

<ThemedView>
  <Text>Hello, Themed World!</Text>
</ThemedView>;
```

### `ThemedText`
A `Text` component that applies theme-specific styles.

```tsx
import { ThemedText } from 'react-native-stylish/components/ThemedText';

<ThemedText>Styled Text</ThemedText>;
```

---

## Predefined Colors

Here is the list of predefined colors available in the library:

### Light Theme Colors

| Name                  | Hex Value   |
|-----------------------|-------------|
| `light`               | `#fff`      |
| `dark`                | `#000`      |
| `screenBackground`    | `#EDF0F8`   |
| `text`                | `#11181C`   |
| `primary`             | `#1B84FF`   |
| `lightPrimary`        | `#E9F3FF`   |
| `danger`              | `#F8285A`   |
| `lightDanger`         | `#FFEEF3`   |
| `success`             | `#17C653`   |
| `lightSuccess`        | `#EAFFF1`   |
| `secondary`           | `#F1F1F4`   |
| `lightSecondary`      | `#F9F9F9`   |
| `info`                | `#7239EA`   |
| `lightInfo`           | `#F8F5FF`   |
| `warning`             | `#F6C000`   |
| `lightWarning`        | `#FFF8DD`   |
| `brand`               | `#FF6F1E`   |
| `lightBrand`          | `#FFF5EF`   |
| `gray100`             | `#F9F9F9`   |
| `gray200`             | `#F1F1F4`   |
| `gray300`             | `#DBDFE9`   |
| `gray400`             | `#C4CADA`   |
| `gray500`             | `#99A1B7`   |
| `gray600`             | `#78829D`   |
| `gray700`             | `#4B5675`   |
| `gray800`             | `#252F4A`   |
| `gray900`             | `#071437`   |

### Dark Theme Colors

| Name                  | Hex Value   |
|-----------------------|-------------|
| `light`               | `#1a1b24`   |
| `dark`                | `#fff`      |
| `screenBackground`    | `#1a1b24`   |
| `text`                | `#ECEDEE`   |
| `primary`             | `#006AE6`   |
| `lightPrimary`        | `#172331`   |
| `danger`              | `#E42855`   |
| `lightDanger`         | `#302024`   |
| `success`             | `#00A261`   |
| `lightSuccess`        | `#1F2623`   |
| `secondary`           | `#363843`   |
| `lightSecondary`      | `#363843`   |
| `info`                | `#883FFF`   |
| `lightInfo`           | `#272134`   |
| `warning`             | `#C59A00`   |
| `lightWarning`        | `#242320`   |
| `brand`               | `#D74E00`   |
| `lightBrand`          | `#272320`   |
| `gray100`             | `#1B1C22`   |
| `gray200`             | `#26272F`   |
| `gray300`             | `#363843`   |
| `gray400`             | `#464852`   |
| `gray500`             | `#636674`   |
| `gray600`             | `#808290`   |
| `gray700`             | `#9A9CAE`   |
| `gray800`             | `#B5B7C8`   |
| `gray900`             | `#F5F5F5`   |

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