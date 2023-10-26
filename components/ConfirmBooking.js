import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ConfirmBooking = () => {
  return <Text style={styles.confirmBooking}> Confirm Booking</Text>;
};

const styles = StyleSheet.create({
  confirmBooking: {
    position: "absolute",
    top: 19,
    left: 110,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 180,
    height: 37,
  },
});

export default ConfirmBooking;
