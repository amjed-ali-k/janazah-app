import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { StackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorParamList } from "../navigators";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { Individual } from "../types/person";
import JanazahListItem from "../components/JanazahListItem";

const peopleLists: Individual[] = Array(50)
  .fill(0)
  .map(() => {
    const listedOn = faker.date.past();
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      parentName: faker.name.findName(),
      isNew: dayjs().diff(listedOn, "day") < 7,
      address: faker.address.streetAddress(),
      district: faker.address.city(),
      birthYear: faker.date.past().getFullYear(),
      tags: [faker.lorem.word(), faker.lorem.word()],
      date: listedOn,
      ipc: parseInt(faker.random.numeric()),
      gpc: parseInt(faker.random.numeric()),
    };
  });

type Props = NativeStackScreenProps<NavigatorParamList, "welcome">;

export default function WelcomeScreen(props: Props) {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-lg bg-slate-100 font-bold px-4 py-4">
        Welcome back! 👋
      </Text>
      <View className="flex-1 bg-white">
        <View className="bg-yellow-100/50 p-4 rounded-lg m-2 border border-yellow-100">
          <Text>
            وَأَنفِقُوا۟ مِن مَّا رَزَقْنَـٰكُم مِّن قَبْلِ أَن يَأْتِىَ
            أَحَدَكُمُ ٱلْمَوْتُ فَيَقُولَ رَبِّ لَوْلَآ أَخَّرْتَنِىٓ إِلَىٰٓ
            أَجَلٍۢ قَرِيبٍۢ فَأَصَّدَّقَ وَأَكُن مِّنَ ٱلصَّـٰلِحِينَ
          </Text>
          <Text>
            And donate from what We have provided for you before death comes to
            one of you, and you cry, “My Lord! If only You delayed me for a
            short while, I would give in charity and be one of the righteous.”
          </Text>
        </View>
        <FlatList
          data={peopleLists}
          renderItem={({ item }) => <JanazahListItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
