import * as React from "react";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return <View style={styles.frame} />;
};

const styles = StyleSheet.create({
  frame: {
    width: 387,
    height: 74,
    overflow: "hidden",
  },
});

export default Frame;
