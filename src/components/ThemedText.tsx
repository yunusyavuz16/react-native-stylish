import { Text, type TextProps } from 'react-native';
import useStyles from '../hooks/useStyles';

export type ThemedViewProps = TextProps;

export function ThemedText({ style, ...otherProps }: ThemedViewProps) {
  const textColor = useStyles().defaultTextColor;

  return <Text style={[textColor, style]} {...otherProps} />;
}
