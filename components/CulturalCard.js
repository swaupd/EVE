import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CulturalCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={[styles.frame, styles.frameLayout]}>
      <Pressable style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-18.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame2, styles.frameLayout]}
        onPress={() => navigation.navigate("Home2")}
      >
        <View style={[styles.frame3, styles.frame3Position]}>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate("Home2")}
          >
            <View style={[styles.groupChild, styles.frame3Position]} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Text style={[styles.cultural, styles.culturalTypo]}>Cultural</Text>
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </Text>
          </Pressable>
        </View>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Text style={styles.culturalTypo}>Technical</Text>
        </View>
        <View style={[styles.frame5, styles.frameFlexBox]}>
          <Text
            style={[styles.loremIpsumDolor1, styles.loremTypo]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
        </View>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    overflow: "hidden",
    height: 309,
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  frame3Position: {
    left: 0,
    position: "absolute",
  },
  culturalTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_13xl,
  },
  loremTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
  },
  frameChild: {
    height: 150,
    width: 389,
  },
  frame1: {
    alignItems: "flex-end",
    width: 389,
    height: 309,
    justifyContent: "flex-end",
  },
  groupChild: {
    top: 20,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.primary3,
    width: 343,
    height: 116,
  },
  groupItem: {
    left: 239,
    width: 150,
    top: 0,
    position: "absolute",
    height: 150,
  },
  cultural: {
    top: 16,
    left: 21,
    width: 174,
    height: 59,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 56,
    left: 24,
    fontFamily: FontFamily.dosisRegular,
    width: 220,
    height: 103,
    position: "absolute",
  },
  rectangleParent: {
    height: 159,
    width: 389,
  },
  frame3: {
    top: 0,
    width: 389,
    alignItems: "center",
    overflow: "hidden",
    height: 309,
  },
  frame4: {
    top: 81,
    left: 191,
    width: 128,
    height: 147,
    position: "absolute",
    alignItems: "center",
  },
  loremIpsumDolor1: {
    fontWeight: "500",
    fontFamily: FontFamily.dosisMedium,
    height: 54,
    width: 212,
  },
  frame5: {
    top: 37,
    left: 112,
    height: 235,
    width: 212,
    position: "absolute",
    alignItems: "center",
  },
  frame2: {
    marginLeft: -343,
    width: 389,
  },
  frame: {
    width: 435,
    flexDirection: "row",
    marginTop: 11,
    alignItems: "center",
  },
});

export default CulturalCard;
