
import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
    },
    loginButton: {
        marginTop: height * 0.03,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#cc0202ff',
        borderRadius: width * 0.05,
        paddingVertical: height * 0.015,
        marginBottom: height * 0.03,
        alignItems: 'center',
    },

    loginButtonText: {
        fontSize: width * 0.04,
        fontWeight: '500',
        color: '#fff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: height * 0.05,
        paddingHorizontal: 16,
    },

    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    cityItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    cityText: {
        fontSize: 18,
    },

    closeModal: {
        backgroundColor: '#cc0202ff',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },

});

