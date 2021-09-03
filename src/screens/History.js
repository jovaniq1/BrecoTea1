import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import PointsComponet from "../components/PointsCount";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default () => {
  return (
    <ScrollView>
      <PointsComponet />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
