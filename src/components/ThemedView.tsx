import { View, type ViewProps } from 'react-native';
import { useStyles } from '../hooks';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useStyles().backgroundColorStyle;

  return <View style={[backgroundColor, style]} {...otherProps} />;
}
