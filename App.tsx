import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CardLogin from "./src/components/CardLogin";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./src/lotties/clouds.json")}
        autoPlay
        loop={true}
        style={{
          width: 300,
          height: 300,
          backgroundColor: '#eee',
        }}
      />
      <CardLogin>
        <View style={styles.groupInput}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "sans-serif",
              marginBottom: 15,
              position: "relative",
            }}
          >
            PedroTech
          </Text>
          <View style={styles.groupIcon}>
            <TextInput style={styles.input} placeholder="E-mail" />
            <MaterialIcons name="email" size={24} style={styles.icon} />
          </View>
          <View style={styles.groupIcon}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
            />
            <Ionicons
              name="ios-eye-off-outline"
              size={24}
              style={styles.icon}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#fff" }}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "#8a2be1" }}>Cadastre-se agora!</Text>
          </TouchableOpacity>
        </View>
      </CardLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "blueviolet",
  },
  groupInput: {
    position: "relative",
    flex: 1,
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    width: "80%",
    position: "relative",
    backgroundColor: "#fff",
    padding: "4%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#8a2be1",
    borderWidth: 1,
    margin: "5%",
  },
  button: {
    width: "80%",
    position: "relative",
    backgroundColor: "#8a2be1",
    padding: "3%",
    margin: "4%",
    borderRadius: 8,
    fontSize: 16,
    alignItems: "center",
    fontFamily: "sans-serif",
    marginTop: "5%",
  },
  groupIcon: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    position: "absolute",
    right: "15%",
    top: "40%",
    color: "blueviolet",
  },
});
