import { View, type ViewProps } from 'react-native';
import useStyles from '../hooks/useStyles';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useStyles().backgroundColor;

  return <View style={[backgroundColor, style]} {...otherProps} />;
}
