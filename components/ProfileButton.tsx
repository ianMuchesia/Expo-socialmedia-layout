import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { cards } from "@/constants/data";

const ProfileButton = (props: any) => {
  const profile = cards[0];
  return (
    <Pressable
      {...props}
      className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 border-2 border-black/80"
    >
      <Image source={profile.image} className="w-10 h-10 rounded-full" />
    </Pressable>
  );
};

export default ProfileButton;
