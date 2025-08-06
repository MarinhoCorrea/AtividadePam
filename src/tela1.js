import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get('window').width;

export default function tela1({ navigation }) {
    return (
        <View style={styles.container}>
            <image source={require('./assets/casual_dog.png')} style={{ width: 200, height: 200, marginBottom: 20 }} />
            <Text style={styles.title}>Ótimo Dia</Text>
            <Text style={styles.title}>Ótimo Dia</Text>
            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('TelaSecundaria')}
            >
                <Text style={styles.buttonText}>Ir para Tela 2</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BDBDBD",
    },
    title: {
        fontSize: 26,
        marginBottom: 50,
    },
    input: {
        height: 40,
        width: windowWidth * 0.5,
        borderColor: '	#BDBDBD',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    IrCadastro: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
    },
    botao: {
        height: 50,
        width: windowWidth * 0.5,
        borderColor: '	#BDBDBD',
        backgroundColor: '#BDBDBD',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 5,
        textAlign: "center",
        paddingTop: 10,
        fontSize: 20,
    },
    buttonContainer: {
        height: 40,
        width: windowWidth * 0.5,
        margin: 5,
        borderRadius: 5,
    },
});