import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

interface VerifiedBadgeProps {
  size?: number;
  color?: string;
  style?: any;
  animated?: boolean;
}

export const VerifiedBadge = ({
  size = 20,
  color = '#1D9BF0', // Twitter blue color
  style,
  animated = true,
}: VerifiedBadgeProps) => {
  const scale = useSharedValue(1);

  React.useEffect(() => {
    if (animated) {
      scale.value = withDelay(
        500,
        withSequence(
          withSpring(1.2),
          withSpring(1)
        )
      );
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Background */}
        <Path
          d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5Z"
          fill={color}
        />
        {/* Checkmark */}
        <Path
          d="M10.5 15.5L7.5 12.5L8.5 11.5L10.5 13.5L15.5 8.5L16.5 9.5L10.5 15.5Z"
          fill="white"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Instagram-style variant
export const InstagramVerifiedBadge = ({
  size = 20,
  style,
  animated = true,
}: Omit<VerifiedBadgeProps, 'color'>) => {
  return (
    <VerifiedBadge
      size={size}
      color="#0095F6" // Instagram blue
      style={style}
      animated={animated}
    />
  );
};