import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../constants/colors'
import Points from "../screens/Points";
import Redeem from "../screens/Redeem";
import History from "../screens/History";
import {Account} from '../screens/Account';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const CustomTabLabel = () => {
  return (
    <Image source={require("../assets/images/account.png")} style={styles.icon} />
  );
};


const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      indicatorStyle: {
        width: windowWidth * 0.1,
        left: windowWidth * 0.07,
        justifyContent: "center",
        alignSelf: "center",
        borderWidth: 1,
        elevation: 0,
      },
      labelStyle: {
        fontSize: windowWidth * 0.03,
        fontWeight: "bold",
        color: "#505C2A",
        paddingRight: 3,
        elevation: 0,
      },
      style: {
        width: "100%",
        elevation: 0,
        borderRadius: 1,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(161,155,183,1)",
        borderStyle: "solid",
        height: (windowHeight * 0.2) / 5,
        backgroundColor: colors.white,
      },
    }}
  >
    <Tab.Screen name="Points" component={Points} />
    <Tab.Screen name="Redeem" component={Redeem} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen
      options={{ tabBarLabel: () => <CustomTabLabel /> }}
      name="Account"
      component={Account}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          navigation.push("Account");
        },
      })}
    />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
  icon: {
    width: (windowHeight * 0.2) / 6,
    height: (windowHeight * 0.2) / 6,
  },
});
