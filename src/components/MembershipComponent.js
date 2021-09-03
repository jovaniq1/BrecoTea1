import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

let memberSince = "2020";
let membershipNumber = "1234 5678 1234 0000";
let lifeTimePoints = "1,173";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import colors from '../constants/colors';


// need to pass points and date

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}> Member since</Text>
        <Text style={styles.text2}> {memberSince}</Text>
      </View>
      <View style={styles.dotLine} />
      <View style={styles.row}>
        <Text style={styles.text}> Membership number </Text>
        <Text style={styles.text2}> {membershipNumber} </Text>
      </View>
      <View style={styles.dotLine} />
      <View style={styles.row}>
        <Text style={styles.text}> Lifetime points earned</Text>
        <Text style={styles.text2}> {lifeTimePoints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    height: (windowHeight * 2) / 11,
    backgroundColor: colors.greenYellowLight,
    justifyContent: "space-around",
    shadowColor: colors.grey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  container2: {
    alignContent: "center",
    marginHorizontal: "10%",
  },
  text: {
    padding: 10,
    fontSize: (windowWidth * 0.08) / 3,
    justifyContent: "flex-start",
    color: colors.black,
  },
  text2: {
    padding: 10,
    fontWeight: "bold",
    fontSize: (windowWidth * 0.08) / 3,
    color: colors.black,
  },
  row: {
    marginHorizontal: "6%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  dotLine: {
    borderRadius: 1,
    marginHorizontal: "6%",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "rgba(161,155,183,1)",
  },
});
