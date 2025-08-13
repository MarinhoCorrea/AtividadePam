import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";

import tela1 from './src/tela1';
import tela2 from './src/tela2';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            initialRouteName="TelaInicial"
            screenOptions={{
              headerShown: false, // Esconde o cabeçalho padrão
            }}>
            <Stack.Screen name="TelaInicial" component={tela1} />
            <Stack.Screen name="TelaSecundaria" component={tela2}  />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
