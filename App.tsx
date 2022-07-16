import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
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
