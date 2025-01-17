import { Text } from 'react-native';
import { flexStyle, ThemeProvider } from 'react-native-stylish';

export default function App() {
  return (
    <ThemeProvider>
      <Text style={[flexStyle.flex1]}></Text>
    </ThemeProvider>
  );
}
