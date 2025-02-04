import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { cards } from "@/constants/data";
import MasonryList from "@react-native-seoul/masonry-list";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ProfileGridProps {
  userId: string;
}

const ProfileCard = ({ item, index }: any) => {
  const isEven = index % 2 === 0;
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
  ];
  const currentColor = colors[index % colors.length];

  console.log("color", currentColor);
  return (
    <Pressable
      className={`flex items-center justify-center mb-4  ${
        index % 3 === 0 ? "h-48" : "h-64"
      } rounded-xl ${isEven && "mr-4"} ${currentColor}`}
    >
      <Image source={item.image}  className={`  ${index%3==0?" h-24 w-24  ":" h-32 w-32 "}`}/>
      <Text className="text-white text-lg font-bold">{item.name}</Text>
    </Pressable>
  );
};
const ProfileGrid = ({ userId }: ProfileGridProps) => {
  const profiles = cards.filter((card) => card.id !== Number(userId));

  return (
    <View>
      <MasonryList
        data={profiles}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => <ProfileCard item={item} index={i} />}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default ProfileGrid;
