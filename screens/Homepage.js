import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={[styles.homepageChild, styles.eveIconPosition]} />
      <Image
        style={styles.homepageItem}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={styles.rejoiceEveryMoment}>{`REJOICE EVERY MOMENT `}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectanglePosition]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.cultural, styles.socialTypo]}>Cultural</Text>
        <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupTransform]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.groupInner, styles.groupTransform]} />
        <Image
          style={[styles.ellipseIcon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </Pressable>
      <Text style={[styles.technical, styles.socialTypo]}>Technical</Text>
      <Text
        style={[styles.loremIpsumDolor1, styles.signInTypo]}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Text style={[styles.social, styles.socialPosition]}>Social</Text>
        <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Pressable>
      <Image
        style={[styles.eveIcon, styles.eveIconPosition]}
        contentFit="cover"
        source={require("../assets/eve1.png")}
      />
      <Text style={[styles.signIn, styles.signInTypo]}>sign in</Text>
      <Image
        style={[styles.homepageInner, styles.socialPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eveIconPosition: {
    top: 22,
    position: "absolute",
  },
  rectanglePosition: {
    left: 16,
    width: 389,
    position: "absolute",
  },
  groupLayout: {
    height: 116,
    width: 343,
    backgroundColor: Color.primary3,
    top: 20,
    left: 0,
  },
  groupItemPosition: {
    top: 0,
    height: 150,
    position: "absolute",
  },
  socialTypo: {
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
  },
  loremTypo: {
    fontFamily: FontFamily.dosisRegular,
    top: 56,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  groupTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  signInTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  socialPosition: {
    top: 25,
    position: "absolute",
  },
  homepageChild: {
    left: 302,
    borderRadius: 7,
    backgroundColor: Color.colorGainsboro,
    width: 57,
    height: 28,
  },
  homepageItem: {
    borderRadius: 15,
    width: 385,
    height: 77,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rejoiceEveryMoment: {
    top: 163,
    left: 60,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  groupItem: {
    left: 239,
    width: 150,
    height: 150,
  },
  cultural: {
    top: 16,
    width: 174,
    height: 59,
    color: Color.colorWhite,
    left: 21,
    position: "absolute",
  },
  loremIpsumDolor: {
    width: 220,
    height: 103,
    left: 24,
  },
  rectangleParent: {
    top: 212,
    height: 159,
    width: 389,
  },
  groupInner: {
    borderRadius: 10,
    height: 116,
    width: 343,
    backgroundColor: Color.primary3,
    top: 20,
    left: 0,
  },
  ellipseIcon: {
    left: -359,
    width: 120,
    height: 150,
  },
  rectangleGroup: {
    top: 371,
    left: 359,
    height: 150,
    width: 389,
  },
  technical: {
    top: 390,
    left: 207,
    color: Color.colorWhite,
    position: "absolute",
  },
  loremIpsumDolor1: {
    top: 430,
    left: 128,
    fontWeight: "500",
    fontFamily: FontFamily.dosisMedium,
    width: 212,
    height: 54,
    color: Color.colorWhite,
  },
  social: {
    left: 24,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
  },
  loremIpsumDolor2: {
    width: 208,
    height: 56,
    left: 21,
  },
  rectangleContainer: {
    top: 532,
    height: 150,
    width: 389,
  },
  eveIcon: {
    left: 15,
    width: 49,
    height: 24,
  },
  signIn: {
    left: 306,
    fontWeight: "700",
    fontFamily: FontFamily.dosisBold,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    top: 22,
  },
  homepageInner: {
    left: 259,
    width: 30,
    height: 25,
  },
  homepage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Homepage;
