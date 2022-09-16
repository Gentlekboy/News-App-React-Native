import { Image, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { WelcomeScreenNavigationProps } from "../../types/navigation/ScreenNavigationProps";

const WelcomeScreen = ({ navigation }: WelcomeScreenNavigationProps) => {
  const logo = require("../../assets/images/adaptive-icon.png");
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#2596be" style="light" />
      <Image source={logo} style={styles.logo} />

      <Button
        mode="contained"
        onPress={() => navigation.navigate("SignUp")}
        style={[styles.button, styles.signUp]}
      >
        Sign Up to News
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        Login to News
      </Button>
    </View>
  );
};

export default WelcomeScreen;
