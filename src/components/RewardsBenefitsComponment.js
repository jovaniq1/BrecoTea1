import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions

} from "react-native";
import React from "react";
import colors from '../constants/colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let msg1 = "Celebrate with a birthday treat from us on your birthday!";
let msg2 = "Earn points to reedem delicious drinks and desserts.";
let msg3 = "Skip the line! Order and pay ahed for pickup.";
let msg4 = "Exclusive access to especial offers";
export default () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.section, backgroundColor: colors.white }}>
        <Text
          style={{
            fontWeight: "bold",
            color: colors.darkGreen,
            position: "absolute",
            margin: "3%",
            fontSize: (windowHeight * 0.1) / 5,
          }}
        >
          {" "}
          Breco Tea Rewards benefits
        </Text>
        <Text
          style={{
            ...styles.text,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.4,
          }}
        >
          {" "}
          {msg1}
        </Text>
        <Image
          source={require("../assets/images/muffinpoints.png")}
          style={styles.muffin}
        />
      </View>
      <View
        style={{ ...styles.section, backgroundColor: colors.greenYellowLight }}
      >
        <Image
          source={require("../assets/images/drinkpoints.png")}
          style={styles.drink}
        />
        <Text
          style={{
            ...styles.text,
            marginLeft: windowWidth * 0.4,
            marginRight: windowWidth * 0.1,
          }}
        >
          {" "}
          {msg2}{" "}
        </Text>
      </View>
      <View style={{ ...styles.section, backgroundColor: colors.white }}>
        <Text
          style={{
            ...styles.text,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.4,
          }}
        >
          {" "}
          {msg3}
        </Text>
        <Image
          source={require("../assets/images/bagspoints.png")}
          style={styles.bags}
        />
      </View>
      <View
        style={{ ...styles.section, backgroundColor: colors.greenYellowLight }}
      >
        <Image source={require("../assets/images/times2.png")} style={styles.x2} />
        <Text
          style={{
            ...styles.text,
            marginLeft: windowWidth * 0.4,
            marginRight: windowWidth * 0.1,
          }}
        >
          {" "}
          {msg4}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: colors.greenYellowLight,
    justifyContent: "space-around",
  },
  section: {
    height: (windowHeight * 2) / 11,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },

  text: {
    // padding:10,
    fontSize: (windowWidth * 0.1) / 3,
    justifyContent: "center",
    alignSelf: "center",

    //position:'absolute',
    color: colors.black,
  },
  muffin: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.17,
    maxWidth: windowWidth * 0.2,
    maxHeight: windowHeight * 0.3,
    minHeight: 120,
    minWidth: 90,
    right: windowWidth * 0.1,
    position: "absolute",
  },
  drink: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.3,
    minHeight: 120,
    minWidth: 90,
    maxWidth: "40%",
    maxHeight: "70%",
    left: windowWidth * 0.1,
    position: "absolute",
  },
  bags: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    minHeight: 160,
    minWidth: 160,
    maxWidth: "60%",
    maxHeight: "60%",
    right: windowWidth * 0.1,
    position: "absolute",
  },
  x2: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    minHeight: 120,
    minWidth: 120,
    maxWidth: "60%",
    maxHeight: "60%",
    left: windowWidth * 0.1,
    position: "absolute",
  },
});
