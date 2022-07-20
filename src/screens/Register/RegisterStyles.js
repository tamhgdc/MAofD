import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99CCFF",//#99CCFF  #9999FF
    width: "100%",
    height: "100%"
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 25
  },
  appName: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 40
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputAccount: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 44,
    width: 300,
    marginVertical: 5,
    paddingLeft: 15
  },
  btnSubmit: {
    backgroundColor: "#CC99FF",
    height: 50,
    width: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30
  },
  txtSubmit: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase"
  },
  btnLoginGoogle: {
    height: 40,
    width: 250,
    borderRadius: 25,
    backgroundColor: "transperent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#fff",
  },
  txtLogin: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500"
  }
})

export default styles