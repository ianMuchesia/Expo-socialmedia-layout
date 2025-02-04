import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, EllipsisHorizontalIcon, UserPlusIcon } from 'react-native-heroicons/outline';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import ProfileGrid from '@/components/ProfileGrid';
import { cards } from '@/constants/data';
import { router } from 'expo-router';

const profile = () => {

    const profile = cards.find((card) => card.id === 1);

    return (
      <ScrollView
        className="flex-1 px-4 py-2 bg-black"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeftIcon color={"white"} size={20} strokeWidth={4} />
          </TouchableOpacity>
          <TouchableOpacity>
            <EllipsisHorizontalIcon color={"white"} size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <View className="flex flex-col items-center mt-4">
          <View className="bg-black-300/80 w-36 h-36 rounded-full flex items-center justify-center mb-4 relative ">
            <Image
              source={profile?.image}
              className="w-36 h-36 rounded-full absolute inset-0"
            />
            <View className="bg-none rounded-full h-32 w-32 border-4 border-black absolute" />
          </View>
          <View className="flex flex-row items-center gap-2">
            <Text className="text-white text-2xl font-rubik-bold">
              {profile?.name}
            </Text>
            <VerifiedBadge color="red" />
          </View>
          <Text className="text-gray-400 text-sm font-rubik-regular mt-[-4]">
            {`@${profile?.name}`}
          </Text>
        </View>
  
        {/* Stats */}
        <View className="flex flex-row justify-between items-center mt-4  mx-12">
          <View className="flex flex-col items-center">
            <Text className="text-white text-lg font-rubik-bold">1,234</Text>
            <Text className="text-gray-400 text-sm font-rubik-regular">
              Followers
            </Text>
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-white text-lg font-rubik-bold">345</Text>
            <Text className="text-gray-400 text-sm font-rubik-regular">
              Following
            </Text>
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-white text-lg font-rubik-bold">678</Text>
            <Text className="text-gray-400 text-sm font-rubik-regular">
              Posts
            </Text>
          </View>
        </View>
        {/* Buttons */}
        <View className="flex flex-row justify-between items-center mt-4 ">
          <TouchableOpacity className="bg-primary-500 px-12 h-12 rounded-lg flex items-center justify-center">
            <Text className="text-white text-base font-rubik-medium">Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-black-300/80 px-12 h-12 rounded-lg flex items-center justify-center">
            <Text className="text-white text-base font-rubik-medium">
              Message
            </Text>
          </TouchableOpacity>
          <View className="h-12 w-12 bg-black-300/80 rounded-full flex items-center justify-center">
            <UserPlusIcon strokeWidth={2} color="white" />
          </View>
        </View>
        {/*  Content */}
        {/* content header */}
        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex flex-col items-center gap-0">
            <Text className="text-white text-lg font-rubik-regular">Posts</Text>
            <View className="bg-primary-500 w-4 h-4 rounded-full" />
          </View>
          <View className="flex flex-col items-center gap-0">
            <Text className="text-gray-400 text-lg font-rubik-regular">
              Stories
            </Text>
            <View className="bg-none w-4 h-4 rounded-full" />
          </View>
          <View className="flex flex-col items-center gap-0">
            <Text className="text-gray-400 text-lg font-rubik-regular">
              Videos
            </Text>
            <View className="bg-none w-4 h-4 rounded-full" />
          </View>
          <View className="flex flex-col items-center gap-0">
            <Text className="text-gray-400 text-lg font-rubik-regular">
              Tagged
            </Text>
            <View className="bg-none w-4 h-4 rounded-full" />
            {/* <AnimatedOnlineStatusDot color="red" size={10} isOnline={false} /> */}
          </View>
        </View>
        {/* Masonry list */}
        <View className="mt-4">
          <ProfileGrid userId={"1"}/>
  
        </View>
      </ScrollView>
    );
}

export default profile