import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import CardLogin from './src/components/CardLogin'

export default function App() {
  return (
    <View style={styles.container}>
        <CardLogin>
          <View style={styles.groupInput}>
            <Text style={{fontSize: 24, fontFamily: 'sans-serif'}}>PedroTech</Text>
            <TextInput 
              style={styles.input}
              placeholder="E-mail"
              onChangeText={() => {}}
            ></TextInput>
            <TextInput 
              style={styles.input}
              placeholder="Senha"
              onChangeText={() => {}}
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "#fff"}}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: "#8a2be1"}}>Cadastre-se agora!</Text>
            </TouchableOpacity>
          </View>
        </CardLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'blueviolet'
  },
  groupInput: {
    position: 'relative',
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
      width: '80%',
      position: 'relative',
      backgroundColor: '#fff',
      padding: '4%',
      borderRadius: 8,
      borderStyle: 'solid',
      borderColor: '#8a2be1',
      borderWidth: 1,
      margin: '5%'
  },
  button: {
    width: '60%',
    position: 'relative',
    backgroundColor: '#8a2be1',
    padding: '3%',
    margin: '4%',
    borderRadius: 8,
    fontSize: 16,
    alignItems: 'center',
    fontFamily: 'sans-serif',
    marginTop: '5%'
  }
});
