import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import colors from '../constants/colors';

import Button from '../components/BtnAccount';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


let name = "Linda";
let email = 'linda@kwickpos.com';

const onPress = () => {
  alert('NUll')
}


export const Account = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
   <View style={styles.info}>
   <Text style={styles.nameTxt}>{name}</Text>
   <Text style ={styles.emailTxt}>{email}</Text>
   </View>
   <View style={styles.buttons}>
   <Button text = 'Edit profile'  onPress={onPress}/>
   <Button text = 'Manage payment method '  onPress={onPress}/>
   <Button text = 'Transaction History'  onPress={onPress}/>
   <Button text = 'Customer support'  onPress={onPress}/>
   <Button text = 'Settings'  onPress={onPress}/>
   <Button text = 'Legal'  onPress={onPress}/>
   <Button text = 'Sign out'  onPress={onPress} />
   </View>
   </View>
   </ScrollView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'flex-start',
    backgroundColor:colors.white,
    height:'100%'
  },
  info:{
    margin:windowWidth*.1
    //justifyContent:'flex-start',
  },
  nameTxt:{
    fontSize:windowWidth*.3/3,
    fontWeight:'bold',
    //color:colors.white,
    //textAlign:'left'
  },
  emailTxt:{
    fontSize:windowWidth*.3/6,
    //textAlign:'left'
  },
  Buttons:{
   //margin:windowWidth*.2
  }

});
