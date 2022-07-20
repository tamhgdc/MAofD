import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imgApp: {
    height: 150,
    width: 150,
    borderRadius: 15
  }, appName: {
    fontSize: 50,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 2
  }
})

export default styles