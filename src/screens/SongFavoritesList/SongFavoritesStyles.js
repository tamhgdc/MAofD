import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "orange",
  },
  headerContent: {
    position: "absolute",
    top: 20,
    left: "40%",
    fontSize: 16,
    fontWeight: "500",
    color: "#fff"
  },
  btnBack: {
    position: "absolute",
    height: 35,
    width: 35,
    top: 10,
    left: 10
  },
  mainContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    // backgroundColor: "red",
    width: width,
    height: "100%",
    alignItems: "center",
    paddingTop: 15
  },
  songItem: {
    height: 65,
    width: width - 20,
    borderColor: "#ccc",
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center", paddingLeft: 15
  },
  btnLogin: {
    backgroundColor: "red",
    height: 35,
    width: 100,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  songImage: {
    height: 45,
    width: 45,
    borderRadius: 10
  },
  songName: {
    color: "#262626",
    fontSize: 16,
    fontWeight: "400", 
    marginLeft: 15
  }

})

export default styles