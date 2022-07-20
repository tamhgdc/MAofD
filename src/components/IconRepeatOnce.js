import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
export default function IconRepeatOnce() {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons
          name="repeat-outline"
          size={24}
          color="#E8E8E8" />
        <View style={styles.once}>
          <Text style={styles.repeat}>1</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  once: {
    position: "absolute",
    backgroundColor: "#800080",
    borderRadius: 200,
    bottom: 1,
    right: 1,
    paddingVertical: 1,
    paddingHorizontal: 3
  },
  repeat: {
    fontSize: 10,
    fontWeight: "400",
    color: "#fff"
  }
})