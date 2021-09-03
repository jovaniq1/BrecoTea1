import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import PointsComponet from "../components/PointsCount";
import MembershipComponent from "../components/MembershipComponent";
import RewardsComponenet from "../components/RewardsBenefitsComponment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default () => {
  return (
    <ScrollView>
      <PointsComponet />
      <View style={{height: windowWidth*.3/4,backgroundColor: "#505C2A",justifyContent: "center"}}>
        <Text style={{fontSize: windowWidth*.3/8, fontWeight:'bold', color: "#FFFFFF", justifyContent:'center',textAlign: "center"}}>
          Redeemable Offers
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
