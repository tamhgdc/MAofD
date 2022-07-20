import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#222831"
    },
    mainWork: {
        marginBottom: 55,
        width: 300,
        height: 350,

        shadowColor: "#fff",
        shadowOffset: {
            height: 5,
            width: 5
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 10
    },
    imgWork: {
        height: "100%",
        width: "100%",
        borderRadius: 15,
        borderWidth: 0.8
    },
    title: {
        marginTop: -30
    }
    ,
    songTitle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20
    },
    singerName: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        padding: 5
    }
    ,
    processContainer: {
        width: 330,
        height: 35,

        flexDirection: "row"

    },
    processLabel: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    processLabelTxt: {
        color: "#fff"
    },

    musicControls: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        width: 330,
        paddingHorizontal: 50

    },
    bottomContainer: {
        borderTopColor: "#000",
        borderTopWidth: 1,
        width: width,
        alignItems: "center",
        paddingVertical: 15
    },
    bottomControl: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    }
});

export default styles;