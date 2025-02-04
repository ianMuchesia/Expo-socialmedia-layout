import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { BellAlertIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon, VideoCameraIcon } from "react-native-heroicons/outline";

const TabBarButton = (props: any) => {
  const { isFocused, routeName, color, label } = props;

  console.log("routeName",routeName)

  const icons = {
    search: (props: any) => <MagnifyingGlassIcon size={20} {...props} color={"white"}/>,
    notification: (props: any) => (
      <BellAlertIcon size={20} {...props} color={"white"} />
    ),
    video: (props: any) => (
      <VideoCameraIcon name="video" size={20} {...props} color={"white"} />
    ),
    index: (props: any) => (
      <ChatBubbleOvalLeftEllipsisIcon size={20} {...props} color={"white"} />
    ),
  };

  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 500 }
    );
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.7]);

    const top = interpolate(scale.value, [0, 1], [0, 0]);
    return {
      //styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  return (
    <Pressable {...props} style={styles.tabbarItem}>
      <Animated.View style={animatedIconStyle}>
        {
          // @ts-ignore
          icons[routeName]({
            color,
          })
        }
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBarButton;
