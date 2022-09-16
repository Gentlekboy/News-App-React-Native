import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/authentication/login/LoginScreen";
import SignUpScreen from "../screens/authentication/sign_up/SignUpScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import { RootStackParamList } from "../types/navigation/RootStackParamList";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerTitle: "Welcome" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ animation: "fade_from_bottom", headerTitle: "Sign Up" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ animation: "fade_from_bottom", headerTitle: "Login" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
