import type { ViewProps } from 'react-native';
import { flexStyle } from '../styles';
import { ThemedView } from './ThemedView';
import { memo } from 'react';
import { useStyles } from '../hooks';

const ScreenLayout: React.FC<ViewProps> = memo((props) => {
  const backgroundStyle = useStyles().containerBackgroundColorStyle;
  return <ThemedView style={[flexStyle.flex1, backgroundStyle]} {...props} />;
});

export { ScreenLayout };
