import { Image, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const logo = require("../../assets/images/adaptive-icon.png");
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#2596be" style="light" />
      <Image source={logo} style={styles.logo} />

      <Button
        mode="contained"
        onPress={() => console.log("Pressed Sign Up")}
        style={[styles.button, styles.signUp]}
      >
        Sign Up to News
      </Button>

      <Button
        mode="contained"
        onPress={() => console.log("Pressed Login")}
        style={styles.button}
      >
        Login to News
      </Button>
    </View>
  );
};

export default WelcomeScreen;
