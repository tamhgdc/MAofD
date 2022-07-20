import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    backgroundColor: "#fff",
    width: width,
    height: 80,
    justifyContent: "center",

  },
  headerTitle: {
    color: "#000",
    fontSize: 26,
    fontWeight: "600",
    marginLeft: 15
  },
  favoriteListContainer: {
    backgroundColor: "#fff",
    width: width,
  },
  favoriteSong: {

  },
  musicLibries: {
    marginLeft: 10,
    marginRight: 10
  },
  titleContent: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 15
  },
  btnLibraly: {
    backgroundColor: '#fff',
    width: 130,
    height: 65,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,

    shadowColor: "#ccc",
    shadowOffset: { height: 10, width: 5 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,

    borderColor: "#ccc",
    borderWidth: 0.4
  },
  iconLibralyContainer: {


  },
  iconLibraly: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 30,
    width: 30,
    marginBottom: 5
  },
  titleLibralyContent: {
    fontSize: 12,
    fontWeight: "400",
    color: "#262626"
  },
  suggestPlaylistContainer: {
    marginTop: 20,
    justifyContent: "center",
    paddingLeft: 15,
    marginBottom: 10
  },
  suggestPlaylistItem: {
    width: width - 20 - 20,
    height: 55,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 250,
    width: width - 20 - 20
  }
})


export default styles