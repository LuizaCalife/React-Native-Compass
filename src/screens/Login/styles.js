import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Home: {

        flex: 1,
        backgroundColor: '#304ffe'
    },
    Logo: {
        width: 250,
        height: 250,
        top: 85,
        left: 80
    },
    input: {
        top: 100,
        marginTop: 22,
        pading: 10,
        width: 300,
        height: 43,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 15,
        left: 60,
    },
    button: {
        backgroundColor: '#c6ceff',
        borderRadius: 10,
        top: 200,
        width: 115,
        height: 38,
        left: 155
    },
    buttonText: {
        top: 10,
        width: 70,
        fontSize: 14,
        left: 30,
        fontWeight: 'bold',
        color: 'blue'
    }
})
export default styles