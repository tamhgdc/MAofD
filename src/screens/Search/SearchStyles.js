import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  searchContainer: {
    flex: 1,
    height: 40,
    width: width - 30 - 30,
    marginTop: 10
  },
  inputSearch: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 999,
    paddingLeft: 15,
  },
  mainContainer: {
    flex: 12,
    // backgroundColor: "red"
  },
  topSearchContainer: {
    flex: 1,
    marginTop: 10,
    width: width - 25
  },
  itemSearch: {
    color: "#262626",
    fontSize: 14,
    marginRight: 10
  },
  searchItemContainer: {
    height: 30,
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginHorizontal: 10,
    borderRadius: 15,
    minWidth: 50,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  resultContainer: {
    height: "100%",
    alignItems: "flex-start",
    width: width - 25,
    flex: 1,
    justifyContent: "space-between",
    padding: 10
  },
  resultImage: {
    height: 55,
    width: 55,
    borderRadius: 10,

  }
})



export default styles