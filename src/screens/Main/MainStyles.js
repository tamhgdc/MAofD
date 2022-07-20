import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  searchContainer: {
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
  textHeader: {
    fontSize: 24,
    fontWeight: "500"
  },
  bannerContainer: {
    height: 200,
    marginBottom: 10,
    borderRadius: 15,
    padding: 10,
    width: width - 20 - 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  topOptionContainer: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 30
  },
  topOptionItem: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTopOption: {
    justifyContent: "center",
    alignItems: "center",
  },
  topOptionIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  topOptionTitle: {
    color: "#000",
    marginTop: 10
  },
  recomendedContainer: {
    height: 200,
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  playBottomContainer: {
    backgroundColor: "#fff",
    height: 55,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: width - 20 - 20,
    opacity: 1,
    borderColor: "transparent",
    borderWidth: 1
  },
  listContainer: {
    height: 150,
    width: 150,
    borderRadius: 20,
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
  wrapper: {},
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  bannerImg: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  }
})

export default styles
