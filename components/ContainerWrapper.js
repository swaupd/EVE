import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const ContainerWrapper = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.rectangleFlexBox}>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("IPhone81")}
          />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
          <View style={styles.rectangleView} />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleFlexBox: {
    alignItems: "center",
    height: 153,
    width: 394,
    flexDirection: "row",
  },
  frameChild: {
    backgroundColor: Color.primary3,
    width: 124,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    height: 153,
  },
  frameChildShadowBox: {
    marginLeft: 11,
    backgroundColor: Color.colorMidnightblue,
    width: 124,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    height: 153,
  },
  rectangleView: {
    backgroundColor: Color.colorMidnightblue,
    width: 124,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    height: 153,
  },
  rectangleGroup: {
    marginLeft: 10,
  },
  frameParent: {
    width: 364,
    flexDirection: "row",
  },
  frame: {
    position: "absolute",
    top: 342,
    left: 0,
    width: 379,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default ContainerWrapper;
