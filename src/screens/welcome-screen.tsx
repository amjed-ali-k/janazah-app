import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
// import { StackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorParamList } from "../navigators";

type Props = NativeStackScreenProps<NavigatorParamList, "welcome">;

export default function WelcomeScreen(props: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="bg-yellow-100/50 p-4 rounded-lg m-2 border border-yellow-100">
        <Text>
          وَأَنفِقُوا۟ مِن مَّا رَزَقْنَـٰكُم مِّن قَبْلِ أَن يَأْتِىَ
          أَحَدَكُمُ ٱلْمَوْتُ فَيَقُولَ رَبِّ لَوْلَآ أَخَّرْتَنِىٓ إِلَىٰٓ
          أَجَلٍۢ قَرِيبٍۢ فَأَصَّدَّقَ وَأَكُن مِّنَ ٱلصَّـٰلِحِينَ
        </Text>
        <Text>
          And donate from what We have provided for you before death comes to
          one of you, and you cry, “My Lord! If only You delayed me for a short
          while, I would give in charity and be one of the righteous.”
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
