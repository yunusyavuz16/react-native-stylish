import { TouchableOpacity, View } from 'react-native';
import {
  alignItemsStyle,
  borderRadiusStyle,
  flexStyle,
  justifyContentStyle,
  paddingStyle,
  ScreenLayout,
  setCustomColors,
  ThemedText,
  ThemeProvider,
  useColors,
  useTheme
} from 'react-native-trendy';

type MyCustomPalette = {
  customPrimary: string;
  customSecondary: string;
};

// Define custom colors
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
  const colors = useColors<MyCustomPalette>();
  const { toggleTheme } = useTheme();

  return (
    <ScreenLayout
      style={[
        flexStyle.flex1,
        justifyContentStyle.justifyContentCenter,
        alignItemsStyle.alignItemsCenter,
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
        <ThemedText>React Native Trendy</ThemedText>
      </TouchableOpacity>
    </ScreenLayout>
  );
};
