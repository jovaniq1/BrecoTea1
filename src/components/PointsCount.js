import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import React from "react";

import colors from '../constants/colors';

let amountOfPoints = 237;
let lastUpadatedOn = "08/21/2021";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// need to pass points and date
export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <Image
          source={require("../assets/images/left_leaf.png")}
          style={styles.leftSide}
        />
        <Text style={styles.pointsCount}>{amountOfPoints}</Text>
        <Image
          source={require("../assets/images/right_leaf.png")}
          style={styles.rightSide}
        />
      </View>
      <View style={styles.pointsRedeemContainer}>
        <Text style={styles.pointsRedeem}> Points to Redeem</Text>
        <Text style={styles.update}> Last updated on {lastUpadatedOn}</Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  pointsRedeemContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  Section3: {
    height: 34,
    backgroundColor: "#505C2A",
    justifyContent: "center",
  },
  leftSide: {
    width: windowWidth*.3,
    height: windowHeight*.1,
  },
  rightSide: {
    width: windowWidth*.3,
    height: windowHeight*.1
  },
  pointsCount: {
    fontSize: windowHeight * 0.08,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#C2DA6F"
  },
  pointsRedeem: {
    fontSize: (windowWidth * 0.08) / 2,
    color: "#505C2A",
  },
  update: {
    fontSize: (windowWidth * 0.08) / 4,
    marginVertical: "1%",
    justifyContent: "center",
    color: "#707071",
  },
});
