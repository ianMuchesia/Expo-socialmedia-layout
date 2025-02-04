import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
  withDelay,
} from 'react-native-reanimated';

interface OnlineStatusDotProps {
  size?: number;
  borderWidth?: number;
  color?: string;
  pulseColor?: string;
  isOnline?: boolean;
}

export const AnimatedOnlineStatusDot = ({
  size = 12,
  borderWidth = 2,
  color = '#4CAF50',
  pulseColor = 'rgba(76, 175, 80, 0.2)',
  isOnline = true,
}: OnlineStatusDotProps) => {
  const pulseScale = useSharedValue(1);

  useEffect(() => {
    if (isOnline) {
      pulseScale.value = withRepeat(
        withSequence(
          withTiming(1.5, { duration: 1000 }),
          withTiming(1, { duration: 1000 }),
        ),
        -1, // Infinite repeat
        false // Don't reverse the animation
      );
    } else {
      pulseScale.value = withTiming(1);
    }
  }, [isOnline]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
    opacity: withDelay(
      500,
      withSequence(
        withTiming(0.2, { duration: 500 }),
        withTiming(0, { duration: 500 })
      )
    ),
  }));

  return (
    <View style={[styles.container, { width: size * 2, height: size * 2 }]}>
      {isOnline && (
        <Animated.View
          style={[
            styles.pulse,
            pulseStyle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: pulseColor,
            },
          ]}
        />
      )}
      <View
        style={[
          styles.dot,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth,
            backgroundColor: isOnline ? color : '#808080',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulse: {
    position: 'absolute',
  },
  dot: {
    borderColor: 'white',
  },
});