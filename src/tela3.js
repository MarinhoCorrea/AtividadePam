import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function tela2({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.Tela}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>&lt;</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Cadastre-se</Text>
                <Text style={styles.subtitle}>informe seu email e senha</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.TextInputContainer}>
                    <Text style={styles.subtitle}>E-mail</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Digite seu E-mail"
                    />
                    <Text style={styles.subtitle}>Crie uma senha</Text>
                    <View style={styles.SenhaContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Digite sua senha"
                            keyboardType="number-pad"
                            secureTextEntry={true}
                        />
                        <Image source={require("../assets/olhoSenha.png")} style={styles.iconOlho} />
                    </View>
                    <Text style={styles.subtitle}>Repita sua senha</Text>
                    <View style={styles.SenhaContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Digite sua senha"
                            keyboardType="number-pad"
                            secureTextEntry={true}
                        />
                        <Image source={require("../assets/olhoSenha.png")} style={styles.iconOlho} />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.botaoComoDeseja}
                    onPress={() => navigation.navigate('TelaSecundaria')}
                >
                    <Text style={styles.textBotoes}>Cadastrar</Text>
                </TouchableOpacity>
                <View style={styles.TracoContainer}>
                    <View style={styles.Traco} />
                    <Text style={styles.TracoText}>
                        Ou continue com
                    </Text>
                    <View style={styles.Traco} />
                </View>
                <View style={styles.ContainerIcon}>
                    <Image source={require("../assets/Google.png")} style={styles.icon} />
                    <Image source={require("../assets/Facebook.png")} style={styles.icon} />
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    Tela: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#fefefe",
    },
    container: {
        marginLeft: 20,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefefe",
    },
    header: {
        marginTop: 30,
        marginLeft: 20,
    },
    backButton: {
        position: 'absolute',
        left: -10,
        top: 0,
        padding: 10,
    },
    backButtonText: {
        fontSize: 50,
        color: '#43d38d',
    },
    title: {
        fontSize: 30,
        marginTop: 90,
        fontWeight: 600,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 500
    },
    TextInputContainer: {
        display: 'flex',
    },
    SenhaContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconOlho: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 10,
        top: 15,
    },
    textInput: {
        height: 55,
        width: windowWidth * 0.9,
        backgroundColor: '#e3e7fe',
        borderStyle: "none",
        marginBottom: 12,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 12,
    },

    botaoComoDeseja: {
        backgroundColor: '#43d38d',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 20,
        borderRadius: 5,
        height: 50,
        width: 340
    },
    textBotoes: {
        color: '#fff',
    },
    TracoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 80,
        width: windowWidth * 0.8,
    },
    Traco: {
        flex: 1,
        height: 1,
        backgroundColor: 'grey',
    },
    TracoText: {
        marginHorizontal: 10,
        color: 'grey',
        fontWeight: 'bold',
    },
    ContainerIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 40,
    },
    icon: {
        width: 50,
        height: 50,

    },
});