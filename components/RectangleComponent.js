import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const RectangleComponent = () => {
  return <View style={styles.frameChild} />;
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    height: "76.32%",
    width: "100%",
    top: "13.16%",
    right: "0%",
    bottom: "10.53%",
    left: "0%",
    backgroundColor: Color.colorGainsboro,
  },
});

export default RectangleComponent;
