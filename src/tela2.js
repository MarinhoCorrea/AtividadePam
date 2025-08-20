import Checkbox from "expo-checkbox";
import React , { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function tela2({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Acesse</Text>
                <Text style={styles.subtitle}>com E-mail e senha</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <Text style={styles.subtitle}>E-mail</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite seu E-mail"
                />
                <Text style={styles.subtitle}>Senha</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite sua senha"
                    keyboardType="number-pad"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.CheckEsqueci}>
                <View style ={styles.CheckTexto}>
                    <Checkbox
                    style={styles.Chexo}
                    value={isChecked}
                    onValueChange={setIsChecked}
                />
                <Text >Lembrar senha</Text>
                </View>
                <Text >Esqueci minha senha</Text>
            </View>
            <View style={styles.ContainerButton}>
                <TouchableOpacity
                    style={styles.botaoComoDeseja}
                    onPress={() => navigation.navigate('TelaSecundaria')}
                >
                    <Text style={styles.textBotoes}>Como deseja acessar?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botaoOutros}
                    onPress={() => navigation.navigate('TelaSecundaria')}
                >
                    <Text style={styles.textBotoes}>Outros métodos</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../assets/Google.png")} style={styles.icon} />
            <Image source={require("../assets/Facebook.png")} style={styles.icon} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fefefe",
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
    },
    title: {
        fontSize: 30,
        marginTop: 30,
        fontWeight: 600,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 500
    },
    TextInputContainer: {
        marginTop: 20,
        marginLeft: 20,
        display: 'flex',
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
    CheckEsqueci:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },
    Chexo:{
        marginRight:10
    },
    CheckTexto:{
        flexDirection: 'row',
        marginRight: windowWidth * 0.2
    },
    botaoComoDeseja: {
        backgroundColor: '#43d38d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: 150
    },
    textBotoes: {
        fontSize: 14,
    },
    botaoOutros: {
        backgroundColor: '#fefefe',
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#43d38d",
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        width: 340
    },
    icon: {
        width: 28,
        height: 30,

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
   
});