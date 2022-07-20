import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Top100, Main, PlayList } from "../screens";
import React from "react";


const StackMain = createNativeStackNavigator()


const MainStacks = () => {
  return (
    <StackMain.Navigator screenOptions={{
      headerShown: false
    }}>
      <StackMain.Screen name="Home" component={Main} />
      <StackMain.Screen name="Top100" component={Top100} />
      <StackMain.Screen name="PlayList" component={PlayList} />
    </StackMain.Navigator>
  )
}

export default MainStacks