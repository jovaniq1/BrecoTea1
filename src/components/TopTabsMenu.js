import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../constants/colors'
import Points from "../screens/Points";
import Redeem from "../screens/Redeem";
import History from "../screens/History";
import {Favorites} from '../screens/Menu';
import {Recents} from '../screens/Menu';
import {FullMenu} from '../screens/Menu';


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
        left: windowWidth * 0.06,
        justifyContent: "space-evenly",
        alignSelf: "center",
        borderWidth: 1,
        elevation: 0,
      },
      tabStyle: {
        width: windowWidth*.5/2,
        marginHorizontal:1,
        justifyContent:'flex-start'
    },
      labelStyle: {
        fontSize: windowWidth * 0.03,
        fontWeight: "bold",
        color: "#505C2A",
       // paddingRight: 10,
        elevation: 0,
       
        //marginLeft:8,
        //justifyContent:'flex-start',
      },
      style: {
        //justifyContent:'flex-start',
        //width: "80%",
        
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
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Recents" component={Recents} />
    <Tab.Screen name="Full Menu" component={FullMenu} />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
  icon: {
    width: (windowHeight * 0.2) / 6,
    height: (windowHeight * 0.2) / 6,
  },
});
