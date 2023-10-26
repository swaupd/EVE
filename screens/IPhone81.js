import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ConfirmBooking from "../components/ConfirmBooking";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone81 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone81, styles.frame7Bg]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.aboutTheEvent, styles.aboutTheEventTypo]}>
          About the event
        </Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={styles.details}>Details:</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.nameDhruvContainer, styles.aboutTheEventTypo]}>
          Name : Dhruv SharmaEmail : dhruvsharma@gmail.comMobile No : 9822XXXXXX
        </Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={styles.frame4}>
          <View style={[styles.frameChild, styles.frameShadowBox]} />
          <Text style={[styles.figmaBootcamp, styles.figmaBootcampTypo]}>
            {" "}
            Figma Bootcamp
          </Text>
          <Text style={[styles.date12Container, styles.figmaBootcampTypo]}>
            <Text style={styles.date12}>Date : 12 Dec 2023</Text>
            <Text style={styles.date12}>Time : 12 noon</Text>
            <Text>
              <Text style={styles.date12}>{`Venue : N518 `}</Text>
              <Text style={styles.text}>{`  `}</Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Text
          style={[
            styles.loremIpsumDolorContainer,
            styles.loremContainerPosition,
          ]}
        >
          <Text style={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text style={styles.text1}>..</Text>
        </Text>
        <Text
          style={[
            styles.loremIpsumDolorContainer1,
            styles.loremContainerPosition,
          ]}
        >
          <Text style={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text style={styles.text1}>..</Text>
        </Text>
      </View>
      <View style={[styles.frame6, styles.framePosition]}>
        <Pressable
          style={[styles.frame7, styles.frameShadowBox]}
          onPress={() => navigation.navigate("Confirmation")}
        >
          <Pressable
            style={[styles.frameInner, styles.frameLayout]}
            onPress={() => navigation.navigate("Confirmation")}
          />
          <ConfirmBooking />
        </Pressable>
      </View>
      <View style={[styles.iphone81Child, styles.frameItemLayout]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Homepage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-25.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frame7Bg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  aboutTheEventTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.lalezarRegular,
  },
  frameShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  figmaBootcampTypo: {
    left: 150,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  framePosition: {
    width: 381,
    left: -6,
    position: "absolute",
    overflow: "hidden",
  },
  frameItemLayout: {
    height: 1,
    width: 382,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  loremContainerPosition: {
    left: 17,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  wrapperPosition: {
    left: 0,
    top: 0,
  },
  aboutTheEvent: {
    width: 153,
    height: 28,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
  },
  frame: {
    top: 283,
    width: 170,
    left: -6,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  details: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.lalezarRegular,
  },
  frame1: {
    top: 454,
    width: 75,
    left: -6,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  nameDhruvContainer: {
    fontSize: FontSize.size_sm,
    width: 198,
    height: 87,
  },
  frame2: {
    top: 491,
    width: 215,
    left: -6,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    backgroundColor: Color.colorMidnightblue,
    shadowRadius: 4,
    elevation: 4,
    width: 124,
    borderRadius: Border.br_4xs,
    position: "absolute",
    left: 0,
    top: 0,
    height: 153,
  },
  figmaBootcamp: {
    top: 10,
    width: 194,
    height: 44,
    color: Color.colorBlack,
  },
  date12: {
    color: Color.colorDimgray,
  },
  text: {
    color: Color.colorBlack,
  },
  date12Container: {
    top: 54,
    whiteSpace: "pre-wrap",
  },
  frame4: {
    width: 344,
    height: 153,
    overflow: "hidden",
  },
  frame3: {
    top: 100,
    width: 364,
    left: -6,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    top: 115,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.lalezarRegular,
  },
  text1: {
    fontFamily: FontFamily.dosisRegular,
  },
  loremIpsumDolorContainer: {
    width: 218,
    height: 55,
    top: 0,
    left: 17,
  },
  loremIpsumDolorContainer1: {
    top: 55,
    width: 228,
    height: 60,
  },
  frame5: {
    top: 325,
    height: 115,
  },
  frameInner: {
    top: 15,
    left: 54,
    backgroundColor: Color.colorDodgerblue,
    width: 265,
    height: 41,
  },
  frame7: {
    shadowRadius: 15,
    elevation: 15,
    width: 375,
    height: 72,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frame6: {
    top: 595,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iphone81Child: {
    top: 274,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 385,
    height: 79,
    position: "absolute",
    left: 0,
  },
  iphone81: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone81;
