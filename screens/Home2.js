import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import { useNavigation } from "@react-navigation/native";
import ContainerWrapper from "../components/ContainerWrapper";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home2}>
      <View style={styles.frame}>
        <SectionCard />
      </View>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Pressable
          style={[styles.frame2, styles.frameLayout]}
          onPress={() => navigation.navigate("Homepage1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
        </Pressable>
        <View style={[styles.frame3, styles.framePosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-19.png")}
          />
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.newEvents, styles.eventsTypo]}>New Events</Text>
        </View>
        <ContainerWrapper />
        <View style={[styles.frame5, styles.framePosition]}>
          <Text style={styles.eventsTypo}>Upcoming Events</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 385,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    position: "absolute",
  },
  eventsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_8xl,
  },
  frame: {
    top: 558,
    left: 11,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
    width: 379,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame2: {
    left: 4,
    top: 8,
    height: 74,
  },
  frameChild: {
    width: 375,
    height: 169,
  },
  frame3: {
    top: 90,
    width: 379,
    left: 0,
  },
  newEvents: {
    width: 146,
    height: 40,
  },
  frame4: {
    top: 286,
    width: 170,
  },
  frame5: {
    top: 510,
    width: 217,
  },
  frame1: {
    top: -8,
    left: -4,
    height: 552,
    overflow: "hidden",
  },
  home2: {
    backgroundColor: Color.colorLightgray,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    height: 667,
    width: "100%",
  },
});

export default Home2;
