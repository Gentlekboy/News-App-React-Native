import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

export type WelcomeScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;

export type SignUpScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUp"
>;

export type LoginScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;
