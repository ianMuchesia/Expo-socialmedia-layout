import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  MagnifyingGlassIcon,
  Square2StackIcon,
  Squares2X2Icon,
} from "react-native-heroicons/outline";
import Statuses from "@/components/Statuses";
import { cards } from "@/constants/data";
import { AnimatedOnlineStatusDot } from "@/components/AnimatedOnlineStatusDot";
import { router } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 py-2 px-4 bg-black ">
      {/* Header */}
      <View className="flex flex-row items-center justify-start gap-4">
        <Squares2X2Icon color={"gray"} size={40} />

        <Text className="text-white font-rubik-bold text-4xl ">Chats</Text>
      </View>
      {/* Search Bar */}
      <View className=" flex flex-row items-center rounded-xl bg-black-300/80 px-4 py-2 mt-4">
        <TextInput
          className="flex-1 text-base text-white mb-1 pl-3 tracking-wider"
          placeholder="Search..."
          placeholderTextColor={"gray"}
        />
        <View>
          <MagnifyingGlassIcon color={"gray"} size={20} strokeWidth={4} />
        </View>
      </View>

      {/* Statuses */}
      <View>
        <Statuses />
      </View>
      <View>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="mt-4"
          renderItem={({ item }) => (
            <TouchableOpacity className="mb-4"
            onPress={()=>router.push(`/profiles/${item.id}`)}
            >
              <View className="flex flex-row items-center gap-4 ">
                <View className="bg-black-300/80 w-20 h-20 rounded-full flex items-center justify-center ">
                  <Image
                    source={item.image}
                    className="w-20 h-20 rounded-full"
                  />
                </View>
                <View className="flex-1 border-b border-black-300/80 py-2">
                   <View className="flex flex-row items-center justify-start">
                    <AnimatedOnlineStatusDot/>
                    <Text className="font-rubik-medium text-white">{item.name}</Text>
                    </View>
                    <Text className="text-gray-400">{item.message}</Text>
                    </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
