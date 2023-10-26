import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import CulturalCard from "../components/CulturalCard";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Homepage1 = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.frame}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.social}>Social</Text>
          <Text style={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.frame2}>
          <Text
            style={styles.rejoiceEveryMoment}
          >{`REJOICE EVERY MOMENT `}</Text>
          <CulturalCard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 20,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.primary3,
    width: 343,
    height: 116,
  },
  groupItem: {
    position: "absolute",
    top: 0,
    left: 239,
    width: 150,
    height: 150,
  },
  social: {
    position: "absolute",
    top: 25,
    left: 24,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  loremIpsumDolor: {
    position: "absolute",
    top: 56,
    left: 21,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dosisRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 208,
    height: 56,
  },
  rectangleParent: {
    position: "relative",
    width: 389,
    height: 150,
  },
  frame: {
    position: "absolute",
    top: 532,
    left: -30,
    width: 435,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon: {
    position: "relative",
    width: 385,
    height: 74,
    overflow: "hidden",
  },
  rejoiceEveryMoment: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorBlack,
    textAlign: "left",
    height: 38,
    marginRight: 9,
  },
  frame2: {
    width: 435,
    height: 358,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 94,
  },
  frame1: {
    position: "absolute",
    top: -4,
    left: -30,
    width: 435,
    height: 526,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  homepage: {
    position: "relative",
    backgroundColor: Color.colorLightgray,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Homepage1;
