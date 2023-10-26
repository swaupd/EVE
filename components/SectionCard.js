import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.rectangleFlexBox}>
        <View style={styles.frameChildShadowBox1} />
        <View style={styles.frameChildShadowBox} />
        <View style={styles.frameChildShadowBox} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
        <View style={styles.frameChildShadowBox1} />
        <View style={styles.frameChildShadowBox} />
        <View style={styles.frameChildShadowBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleFlexBox: {
    alignItems: "center",
    width: 394,
    flexDirection: "row",
    height: 153,
  },
  frameChildShadowBox1: {
    width: 124,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_4xs,
    height: 153,
  },
  frameChildShadowBox: {
    marginLeft: 11,
    width: 124,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_4xs,
    height: 153,
  },
  rectangleGroup: {
    marginLeft: 10,
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    height: 153,
  },
});

export default SectionCard;
