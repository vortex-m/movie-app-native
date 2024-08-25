import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity className="bg-blue-500 p-4 rounded">
        <Text className="text-white">HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
