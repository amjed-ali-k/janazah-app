import { Text, View, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorParamList } from "../navigators";
import { SafeAreaView } from "react-native-safe-area-context";
import { faker } from "@faker-js/faker";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
type Props = NativeStackScreenProps<NavigatorParamList, "single">;

export default function IndividualScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="relative flex-row bg-cyan-900 text-white h-96">
        <View className="mx-6 flex-row items-center justify-center">
          <Image
            className="w-40 h-60 rounded-full object-contain"
            source={{ uri: faker.internet.avatar() }}
          />
        </View>
        <View className="text-center overflow-hidden grow p-1 flex-col items-center justify-center">
          <Text className="text-white font-medium text-xl text-center">
            IN LOVING MEMORY
          </Text>
          <Text className="text-5xl flex-wrap shrink text-orange-300 font-bold my-2">
            Amanda Wills
          </Text>
          <Text className="text-white">1952 - 2011</Text>
        </View>
        <View className="absolute -bottom-7 right-10 bg-orange-300 p-6 rounded-full">
          <Text className="text-white  text-2xl uppercase font-bold">
            <FontAwesome5 name="hands" size={26} />
            <Text> </Text>
            <Text className="">Pray Janazah</Text>
          </Text>
        </View>
      </View>
      <View className="mt-5 p-8">
        <Text className="uppercase text-gray-500 text-xl font-bold">
          The funeral will be held in
        </Text>
        <Text className="font-bold text-black text-4xl">
          Kalpakkanjeeri Juma Masjid
        </Text>
        <Text className="text-gray-500 flex flex-row items-center justify-center text-xl font-bold">
          <MaterialIcons className="" name="access-time" size={20} />
          <Text>10:00 AM Tuesday 21-July-2022</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
