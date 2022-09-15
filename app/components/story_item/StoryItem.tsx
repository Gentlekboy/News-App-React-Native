import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const StoryItem = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    link: string;
  };
}) => {
  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.titleAndLink}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.link} numberOfLines={2}>
          {item.link}
        </Text>
      </View>

      <View style={styles.idContainer}>
        <Text style={styles.id}>{item.id}</Text>
      </View>
    </View>
  );
};

export default StoryItem;
