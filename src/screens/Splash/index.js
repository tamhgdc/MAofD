import React from "react"
import { View, Text, Image, ActivityIndicator } from "react-native"
import styles from "./SplashStyles"

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/iconMain.jpg")}
        style={styles.imgApp}
      />
      <Text style={styles.appName}>
        MAofD
      </Text>
      <ActivityIndicator size="large" color="orange" />
    </View>
  )
}

export default Splash