import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { TopBarProps } from "../../types/top_bar/TopBarProps";
import { styles } from "./styles";

const TopBar = (props: TopBarProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>News</Text>

        <Pressable onPress={props.onPressAvatar}>
          <Avatar.Text size={32} label="XD" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
