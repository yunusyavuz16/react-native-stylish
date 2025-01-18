import { Text, TouchableOpacity, View } from 'react-native';
import {
  alignItemsStyle,
  borderRadiusStyle,
  flexStyle,
  justifyContentStyle,
  paddingStyle,
  ratioWidthStyle,
  setCustomColors,
  ThemeProvider,
  useColors,
  useStyles,
  useTheme,
} from 'react-native-stylish';

type MyCustomPalette = {
  customPrimary: string;
  customSecondary: string;
};

// Define custom colors
setCustomColors<MyCustomPalette>({
  light: {
    customPrimary: '#ff5733',
    customSecondary: '#33c1ff',
  },
  dark: {
    customPrimary: '#5733ff',
    customSecondary: '#57ff33',
  },
});

export default function App() {
  return (
    <View style={[flexStyle.flex1]}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </View>
  );
}

const HomeScreen = () => {
  const { lightTextColorStyle } = useStyles();
  const colors = useColors<MyCustomPalette>();
  const { toggleTheme } = useTheme();

  return (
    <View
      style={[
        { backgroundColor: colors.customPrimary },
        flexStyle.flex1,
        ratioWidthStyle.width100,
        alignItemsStyle.alignItemsCenter,
        justifyContentStyle.justifyContentCenter,
      ]}
    >
      <TouchableOpacity
        style={[
          {
            backgroundColor: colors.customSecondary,
          },
          paddingStyle.padding12,
          borderRadiusStyle.borderRadius12,
        ]}
        onPress={() => {
          toggleTheme();
        }}
      >
        <Text style={[lightTextColorStyle]}>React Native Stylish</Text>
      </TouchableOpacity>
    </View>
  );
};
