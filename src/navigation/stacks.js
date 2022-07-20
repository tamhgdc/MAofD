import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { Login, MusicPlayer, Register } from "../screens"
import Tabs from "./tabs"

const Stack = createNativeStackNavigator()

const HomeMusic = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Player" component={MusicPlayer} />
    </Stack.Navigator>
  )
}

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,

      }}
        initialRouteName="HomeMusic">
        <Stack.Screen name="HomeMusic" component={HomeMusic}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacks