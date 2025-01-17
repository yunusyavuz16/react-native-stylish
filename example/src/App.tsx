import { Text } from 'react-native';
import {
  alignItemsStyle,
  flexStyle,
  justifyContentStyle,
  ScreenLayout,
  textAlignStyle,
  ThemeProvider,
} from 'react-native-stylish';

export default function App() {
  return (
    <ThemeProvider>
      <ScreenLayout
        style={[
          flexStyle.flex1,
          justifyContentStyle.justifyContentCenter,
          alignItemsStyle.alignItemsCenter,
        ]}
      >
        <Text style={[flexStyle.flex1, textAlignStyle.textAlignCenter]}>
          React Native Stylish
        </Text>
      </ScreenLayout>
    </ThemeProvider>
  );
}
