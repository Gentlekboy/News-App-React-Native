import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import TopBar from "../../components/top_bar/TopBar";
import StoryItem from "../../components/story_item/StoryItem";
import storyData from "../../utils/story_data/storyData";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <TopBar onPressAvatar={() => {}} />

      <FlatList data={storyData} renderItem={StoryItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
