import { Text, View } from 'react-native';
import {
  alignItemsStyle,
  flexStyle,
  justifyContentStyle,
  ratioWidthStyle,
  ThemeProvider,
  useStyles
} from 'react-native-stylish';

export default function App() {
  return (
    <View style={[flexStyle.flex1]}>
      <ThemeProvider>
        <View
          style={[
            flexStyle.flex1,
            justifyContentStyle.justifyContentCenter,
            alignItemsStyle.alignItemsCenter,
          ]}
        >
          <NewApp />
        </View>
      </ThemeProvider>
    </View>
  );
}

const NewApp = () => {
  const { dangerBackgroundColorStyle,lightTextColorStyle } = useStyles();

  return (
    <View
      style={[
        flexStyle.flex1,
        ratioWidthStyle.width100,
        dangerBackgroundColorStyle,
        alignItemsStyle.alignItemsCenter,
        justifyContentStyle.justifyContentCenter,
      ]}
    >
      <Text style={[lightTextColorStyle]}>React Native Stylish</Text>
    </View>
  );
};
