import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import RectangleComponent from "../components/RectangleComponent";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.signIn}
      resizeMode="cover"
      source={require("../assets/signin.png")}
    >
      <Image
        style={styles.eveIcon}
        contentFit="cover"
        source={require("../assets/eve.png")}
      />
      <Pressable style={[styles.frame, styles.framePosition1]}>
        <Text style={styles.signInWith}>Sign in with Google</Text>
      </Pressable>
      <Pressable style={[styles.componentParent, styles.framePosition1]}>
        <RectangleComponent />
        <Text style={[styles.signInWith1, styles.frame1Position]}>
          Sign in with Apple
        </Text>
      </Pressable>
      <View style={[styles.frame1, styles.frame1Position]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.or, styles.signTypo]}>OR</Text>
      </View>
      <TextInput
        style={[styles.frame2, styles.frameLayout]}
        placeholder="email id"
        autoCapitalize="none"
        placeholderTextColor="#6d6d6d"
      />
      <TextInput
        style={[styles.frame3, styles.frameLayout]}
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        placeholderTextColor="#6d6d6d"
      />
      <View style={[styles.rectangleParent, styles.frameInnerLayout]}>
        <Pressable
          style={[styles.frameInner, styles.frameInnerLayout]}
          onPress={() => navigation.navigate("Homepage1")}
        />
        <Text style={[styles.signIn1, styles.signTypo]}>Sign in</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    width: 272,
    left: 52,
    position: "absolute",
  },
  frame1Position: {
    left: 46,
    position: "absolute",
  },
  framePosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 24,
    position: "absolute",
  },
  signTypo: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
  },
  frameLayout: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_lgi,
    justifyContent: "flex-end",
    height: 57,
    width: 270,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
    left: 52,
    position: "absolute",
    overflow: "hidden",
  },
  frameInnerLayout: {
    height: 39,
    width: 270,
    position: "absolute",
  },
  eveIcon: {
    top: 64,
    left: 137,
    width: 101,
    height: 61,
    position: "absolute",
  },
  signInWith: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  frame: {
    top: 174,
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 0,
    overflow: "hidden",
  },
  signInWith1: {
    color: Color.colorBlack,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
  },
  componentParent: {
    top: 246,
    height: 38,
  },
  frameChild: {
    width: 104,
    left: 0,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 24,
  },
  frameItem: {
    left: 174,
    width: 103,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 24,
  },
  or: {
    left: 126,
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_5xl,
  },
  frame1: {
    top: 310,
    width: 276,
    height: 38,
    overflow: "hidden",
  },
  frame2: {
    top: 384,
  },
  frame3: {
    top: 471,
  },
  frameInner: {
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_5xs,
    height: 39,
    left: 0,
    top: 0,
  },
  signIn1: {
    left: 96,
    fontSize: 25,
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 564,
    height: 39,
    left: 52,
  },
  signIn: {
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default SignIn;
