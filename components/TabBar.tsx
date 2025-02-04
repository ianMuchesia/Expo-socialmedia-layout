import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TabBarButton from "./TabBarButton";

import ProfileButton from "./ProfileButton";
import { BlurView } from "expo-blur";

const TabBar = (props: any) => {
  const { state, descriptors, navigation } = props;
  const primaryColor = "#112416";
  const greyColor = "#0101010";

  return (
   <BlurView 
   experimentalBlurMethod="none"
tint="light"
   intensity={20}  style={styles.tabbar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        if (route.name === "profile") {
          return (
            <ProfileButton
              accessibilityRole="button"
              key={route.name}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? primaryColor : greyColor}
              label={label}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        }

        return (
          <TabBarButton
            accessibilityRole="button"
            key={route.name}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
    tabbar: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent for extra effect
        marginHorizontal: 8,
        paddingVertical: 15,
        borderRadius: 14,
        shadowColor: "#112416",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 10,
        overflow: "hidden", // Ensures blur is within rounded corners
      },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TabBar;
