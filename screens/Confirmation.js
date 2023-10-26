import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmation}>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Homepage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-24.png")}
        />
      </Pressable>
      <View style={[styles.confirmationChild, styles.groupChildShadowBox]} />
      <Text style={[styles.figmaBootcamp, styles.containerTypo]}>
        {" "}
        Figma Bootcamp
      </Text>
      <Text style={[styles.date12Container, styles.containerTypo]}>
        <Text style={styles.date12}>Date : 12 Dec 2023</Text>
        <Text style={styles.date12}>Time : 12 noon</Text>
        <Text>
          <Text style={styles.date12}>{`Venue : N518 `}</Text>
          <Text style={styles.text}>{`  `}</Text>
        </Text>
      </Text>
      <View style={[styles.confirmationItem, styles.confirmationLayout]} />
      <View style={[styles.confirmationInner, styles.confirmationLayout]} />
      <Text style={[styles.ticket, styles.containerTypo]}>Ticket:</Text>
      <Text style={[styles.nameDhruvContainer, styles.containerTypo]}>
        Name : Dhruv SharmaEmail : dhruvsharma@gmail.comMobile No : 9822XXXXXX
      </Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.rectangleView, styles.frameParentPosition]} />
      <Text style={[styles.bookingConfirmed, styles.suggestionsTypo]}>
        Booking Confirmed
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.suggestions, styles.suggestionsTypo]}>
        Suggestions
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.groupLayout}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupChildShadowBox]} />
            <View style={styles.groupShadowBox1} />
            <View style={styles.groupShadowBox} />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <View style={styles.groupShadowBox1} />
          <View style={styles.groupShadowBox} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    top: 0,
    left: 0,
  },
  groupChildShadowBox: {
    height: 153,
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
    position: "absolute",
  },
  containerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    position: "absolute",
  },
  confirmationLayout: {
    height: 1,
    width: 382,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    position: "absolute",
  },
  frameParentPosition: {
    left: 11,
    position: "absolute",
  },
  suggestionsTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.lalezarRegular,
    position: "absolute",
  },
  groupLayout: {
    width: 394,
    height: 153,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 385,
    height: 74,
    position: "absolute",
  },
  confirmationChild: {
    top: 196,
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
    left: 16,
  },
  figmaBootcamp: {
    top: 211,
    left: 166,
    width: 194,
    height: 51,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.lalezarRegular,
  },
  date12: {
    color: Color.colorDimgray,
  },
  text: {
    color: Color.colorBlack,
  },
  date12Container: {
    top: 250,
    left: 170,
    whiteSpace: "pre-wrap",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.lalezarRegular,
  },
  confirmationItem: {
    top: 366,
    left: -6,
  },
  confirmationInner: {
    top: 515,
    left: -3,
  },
  ticket: {
    top: 375,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.lalezarRegular,
    left: 16,
  },
  nameDhruvContainer: {
    top: 417,
    fontSize: FontSize.size_sm,
    width: 198,
    height: 87,
    color: Color.colorBlack,
    left: 16,
  },
  rectangleIcon: {
    top: 392,
    left: 246,
    width: 109,
    height: 107,
    position: "absolute",
  },
  rectangleView: {
    top: 85,
    backgroundColor: "#e8f7e4",
    borderColor: Color.colorLimegreen,
    borderWidth: 3,
    width: 352,
    height: 72,
    borderStyle: "solid",
    left: 11,
    borderRadius: Border.br_4xs,
  },
  bookingConfirmed: {
    top: 106,
    left: 34,
    color: Color.colorLimegreen,
  },
  vectorIcon: {
    height: "3.3%",
    width: "5.87%",
    top: "16.49%",
    right: "13.07%",
    bottom: "80.21%",
    left: "81.07%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  suggestions: {
    top: 530,
    width: 105,
    height: 25,
    color: Color.colorBlack,
    left: 16,
  },
  groupChild: {
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
    top: 0,
    left: 0,
  },
  groupShadowBox1: {
    left: 135,
    height: 153,
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
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    left: 270,
    height: 153,
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
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild1: {
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
    top: 0,
    left: 0,
  },
  rectangleGroup: {
    marginLeft: 10,
  },
  frameParent: {
    top: 597,
    width: 364,
    flexDirection: "row",
  },
  confirmation: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default Confirmation;
