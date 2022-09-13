import { ScrollView, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { styles } from "./styles";
import AlreadyHaveAnAccount from "../../../components/already_have_an_account/AlreadyHaveAnAccount";

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          mode="outlined"
          label="Full Name"
          style={styles.input}
          outlineColor="#808191"
          activeOutlineColor="#2596be"
          keyboardType="default"
        />

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

        <TextInput
          mode="outlined"
          label="Confirm Password"
          style={styles.input}
          outlineColor="#808191"
          activeOutlineColor="#2596be"
          keyboardType="default"
          secureTextEntry={true}
        />

        <Text style={styles.notice}>
          By signing up, you are agreeing to our{" "}
          <Text style={styles.bold}>Terms & Conditions</Text> and{" "}
          <Text style={styles.bold}>Privacy Policy</Text>
        </Text>

        <Button
          mode="contained"
          onPress={() => console.log("Pressed Sign Up Button")}
          style={styles.button}
        >
          SIGN UP
        </Button>

        <AlreadyHaveAnAccount
          text="Joined us before?"
          buttonText="Login"
          onPressButton={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
