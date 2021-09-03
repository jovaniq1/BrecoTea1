import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useHomeData } from '../util/api';
import { Loading } from '../components/Loading';

import PointsComponet from "../components/PointsCount";
import MembershipComponent from "../components/MembershipComponent";
import RewardsComponenet from "../components/RewardsBenefitsComponment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default () => {

  const response = useHomeData();

  if (response.isLoading) {
    return <Loading />;
  }
  console.log(response);

  return (
    <ScrollView>
      <PointsComponet />
      <View style={{height: windowWidth*.3/4,backgroundColor: "#505C2A",justifyContent: "center"}}>
        <Text style={{fontSize: (windowWidth * 0.08) / 3, fontWeight:'bold', color: "#FFFFFF", justifyContent:'center',textAlign: "center"}}>
        Earn 100 more points by 12/31/2021 to reach Gold status
        </Text>
      </View>

      <MembershipComponent />
      <RewardsComponenet />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
