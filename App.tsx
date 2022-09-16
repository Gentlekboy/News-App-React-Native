import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigation/StackNavigator";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
