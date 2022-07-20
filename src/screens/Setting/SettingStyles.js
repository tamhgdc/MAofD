import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get("screen")


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    overflowL: "hidden"
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000"
  },
  avatarContainer: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 0.3,


    shadowColor: "#ccc",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    elevation: 1,
    shadowRadius: 10
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 999,
    marginRight: 25
  },
  userContainer: {

    marginRight: 15
  },
  userName: {
    color: "#FF9900",
    fontSize: 24,
    fontWeight: "400",
  },
  userAddress: {
    color: "#262626",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right"
  },
  mainContainer: {
    flex: 6,
    padding: 0
  },
  accountSettingContainer: {

  },

  playbackSettingContainer: {

    marginTop: 15
  },
  itemSettingContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 5,
    width: width - 20,
    height: 55,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  itemSettingText: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    color: "#000"
  },
  itemDescription: {
    fontSize: 12,
    color: "#ccc",
    marginLeft: 10,
  },
  btnLogout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 25,
    marginBottom: 10
  }
})

export default styles