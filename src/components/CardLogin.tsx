import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

type Props = {
    children: JSX.Element
}
const CardLogin = ({children}: Props) =>{
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50, 
    borderTopLeftRadius: 50,
  },
});

export default CardLogin
