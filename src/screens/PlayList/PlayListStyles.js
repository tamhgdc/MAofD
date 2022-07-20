import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE4C4",
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
  txtHeader: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000",
    marginLeft: 25
  },
  containerList: {
    flex: 8,
    width: width,
    alignItems: "center",
    // paddingTop: 15,
    justifyContent: "center"
  },
  btnItemListSong: {
    flexDirection: "row",
    width: width - 25 - 25,
    height: 55,
    alignItems: "center",
    marginVertical: 5,
  },
  songTitle: {
    marginLeft: 10,
    color: "#000",
    fontSize: 16,
    paddingRight: 55
  },
  songArtwork: {
    borderRadius: 10,
    height: 35,
    width: 35
  },
  songArtist: {
    marginLeft: 10,
    color: "#262626",
    fontSize: 12,
    fontWeight: "300",
    paddingRight: 85
  },
  btnBack: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFE4C4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 10
    },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 0.5
  },
  headerBackground: {
    position: 'absolute',
    top: "25%",
    left: "30%",
    right: 0,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 25,

  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginLeft: 25
  },

})


export default styles