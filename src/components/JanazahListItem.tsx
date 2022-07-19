import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Individual } from "../types/person";
import { useNavigation } from "@react-navigation/native";
import { NavigatorParamList } from "../navigators/app-navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  onPress?: () => void;
  onLongPress?: () => void;
} & Individual;
dayjs.extend(relativeTime);
const JanazahListItem = ({
  name,
  parentName,
  isNew,
  address,
  district,
  birthYear,
  tags,
  date,
  ipc: individualPrayersCount,
  gpc: groupPrayersCount,
  onPress,
  onLongPress,
}: Props) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<NavigatorParamList>>();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigate("single")}
      onLongPress={onLongPress}
      className="m-2 bg-emerald-600/20 border border-slate-300/40 rounded-md"
    >
      <View className="rounded-md p-2 bg-slate-100">
        <View className="flex flex-row">
          <Text className="text-lg flex items-center grow font-bold text-gray-700">
            {name}
            {isNew && (
              <Text className="text-[10px] leading-3 mx-1 py-1 px-2 rounded-md bg-rose-800/70 text-white font-medium">
                New!
              </Text>
            )}
          </Text>
          <Text className="text-xs font-medium text-gray-700">
            <Fontisto name="date" />
            <Text className="ml-1">
              {new Date().getFullYear() - birthYear} Yrs
            </Text>
          </Text>
        </View>
        <View>
          <Text className="text-xs font-medium text-gray-700">
            S/O {parentName}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-xs mr-1 text-gray-600">{address}</Text>
          <Text className="text-xs mr-1 text-gray-600">{district}</Text>
        </View>
        <View className="flex flex-row mt-2">
          {tags.map((e) => (
            <Text
              key={e}
              className="text-xs border mr-2 px-2 rounded-full py-[2px] w-fit text-gray-600"
            >
              {e}
            </Text>
          ))}
        </View>
      </View>
      <View className="rounded-b-md flex-row py-1 px-2">
        <Text className="text-xs flex items-center flex-row grow text-gray-900">
          <MaterialIcons name="access-time" />
          <Text className="pl-1">{dayjs().to(date)}</Text>
        </Text>
        <Text className="text-xs px-1 text-green-700">
          <Ionicons name="checkmark-done" />
          <Text className="pl-1">{individualPrayersCount}+ prayers</Text>
        </Text>
        <Text className="text-xs px-1 text-green-800">
          <FontAwesome5 name="users" />
          <Text className="pl-1">{groupPrayersCount} Jama'ths</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default JanazahListItem;
