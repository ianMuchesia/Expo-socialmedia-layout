import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { cards } from "@/constants/data";
import { PlusIcon } from "react-native-heroicons/outline";

const Statuses = () => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 "
        contentContainerStyle={{ paddingHorizontal: 0 }}
      >
        <View className="bg-black-300/80 w-20 h-20 rounded-full border-2 border-dashed border-white mr-4 flex items-center justify-center">
          <PlusIcon color={"white"} size={20} />
        </View>
        {cards.map((card) => (
          <View className="bg-black-300/80 w-20 h-20 rounded-full border-2  border-primary-500 mr-4 flex items-center justify-center" key={card.id}>
            <Image source={card.image} className="w-16 h-16 rounded-full" />

          </View>
        ))}
      </ScrollView>
    
    </Animated.View>
  );
};

export default Statuses;
