import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  recomendedContainer: {
    height: 200,
    marginBottom: 10,
    marginTop: 20,
    width: "100%"
  },
  listContainer: {
    height: 150,
    width: 150,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  imgThumbnail: {
    borderRadius: 10,
    height: 150,
    width: 150,
  },
  textHeader2: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 30,
    color: "#000"
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  btnBack: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },
  topHeader: {
    justifyContent: "center",
    marginLeft: 100,
    fontSize: 24,
    color: "#000",
    fontWeight: "600"
  }
})

export default styles
