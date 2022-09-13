import { Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { AlreadyHaveAnAccountProps } from "../../types/already_have_an_account/AlreadyHaveAnAccountProps";
import { styles } from "./styles";

const AlreadyHaveAnAccount = ({
  text,
  buttonText,
  onPressButton,
}: AlreadyHaveAnAccountProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>

      <Button
        mode="text"
        onPress={onPressButton}
        color="#2596be"
        uppercase={false}
      >
        {buttonText}
      </Button>
    </View>
  );
};

export default AlreadyHaveAnAccount;
