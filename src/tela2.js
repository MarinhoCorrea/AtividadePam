import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity,Image } from "react-native";
const windowWidth = Dimensions.get('window').width;

export default function tela2({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Acesse</Text>
                <Text style={styles.subtitle}>com E-mail e senha</Text>
            </View>
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
            <Image source={require("../assets/Google.png")}style={styles.icon}/>
            <Image source={require("../assets/Facebook.png")}style={styles.icon}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefefe",
    },
    header:{
        alignItems:{}
    },
    title: {
        fontSize: 30,
        marginTop:30,
        marginBottom: 10,
        fontWeight:600,
    },
    subtitle: {
        fontSize: 20,
        fontWeight:500
    },
    botaoComoDeseja:{
        backgroundColor:'#43d38d',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:70,
        marginBottom: 20,
        borderRadius: 5,
        height: 50,
        width:340
    },
    textBotoes:{
        fontSize:14,     
    },
    botaoOutros:{
        backgroundColor:'#fefefe',
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderColor:"#43d38d",
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        width:340
    },
    icon:{
        width:28,
        height:30,

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