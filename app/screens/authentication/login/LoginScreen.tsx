import { ScrollView, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { styles } from "./styles";

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>

        <TextInput
          mode="outlined"
          label="Email Address"
          style={styles.input}
          outlineColor="#808191"
          activeOutlineColor="#2596be"
          keyboardType="email-address"
        />

        <TextInput
          mode="outlined"
          label="Password"
          style={styles.input}
          outlineColor="#808191"
          activeOutlineColor="#2596be"
          keyboardType="default"
        />

        <Button
          uppercase={false}
          mode="text"
          color="#2596be"
          onPress={() => console.log("Pressed")}
          style={styles.forgotPassword}
        >
          Forgot Password?
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log("Pressed Sign Up Button")}
          style={styles.button}
        >
          LOGIN
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
