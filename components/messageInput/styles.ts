import { StyleSheet } from "react-native";
import { appBlue } from "../../constants/Colors";



export const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 10,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        color: "grey",
    },
    inputContainer: {
        backgroundColor: "lightgrey",
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        backgroundColor: appBlue,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 30,
        color: "white",
    },
    smileIcon: {
        marginHorizontal: 5,
    },
    featherIcon: {
        marginHorizontal: 5,
    },
})
