import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        marginTop: 100,
        marginLeft: 100
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333333",
        marginBottom: 50
    },
    title2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333333"
    },
    containerResults:{
        alignItems: "center",
        flex: 1,
        gap: 20,
        marginTop: 40
    },
    identifier:{
        fontSize: 43,
        color: "#333333",
        fontWeight: 'bold'
    },
    textResult:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#6F6B73"
    },
    containerButtons:{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center"
    }
})