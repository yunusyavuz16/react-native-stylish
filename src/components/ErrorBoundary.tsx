import React from 'react';
import { View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { alignItemsStyle, flexStyle, justifyContentStyle } from '../styles';

interface FallbackProps {
  error: Error | null;
  resetError: () => void;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode | ((props: FallbackProps) => React.ReactNode);
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  renderFallback = () => {
    const { fallback } = this.props;
    const { error } = this.state;

    if (typeof fallback === 'function') {
      return fallback({
        error,
        resetError: this.resetError,
      });
    }

    if (fallback) {
      return fallback;
    }

    return (
      <ThemedView
        style={[
          flexStyle.flex1,
          justifyContentStyle.justifyContentCenter,
          alignItemsStyle.alignItemsCenter,
        ]}
      >
        <View>
          <ThemedText>Something went wrong!</ThemedText>
          {__DEV__ && error && <ThemedText>{error.toString()}</ThemedText>}
        </View>
      </ThemedView>
    );
  };

  render() {
    if (this.state.hasError) {
      return this.renderFallback();
    }

    return this.props.children;
  }
}
