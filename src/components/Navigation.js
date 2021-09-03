import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../constants/colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Cart')}
      style={{ paddingHorizontal: 10 }}
    >
      <Image
        source={require('../assets/images/gift.png')}
        style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>
  );
};

export const CloseIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={{ paddingHorizontal: 10 }}
    >
      <Image
        source={require('../assets/images/gift.png')}
        style={{ width: 25, height: 25, tintColor: colors.brand }}
      />
    </TouchableOpacity>
  );
};
// need to pass user names
export const Header = ({ title, routeName }) => {
  if (routeName === 'Home') {
    let src = require('../assets/images/star.png');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Good day</Text>
        <Image style={styles.Image} source={src} />
      </View>
    );
  }

  if (routeName === 'Menu') {
    let src = require('../assets/images/coffee.png');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{routeName}</Text>
        <Image style={styles.Image} source={src} />
      </View>
    );
  }

  if (routeName === 'Scan') {
    let src = require('../assets/images/star.png');
    return (
      <View style={{flexDirection:'row',justifyContent: "space-between",width: windowWidth*.90,}}>
      

        
        
        <Text style={styles.title}>Scan to pay</Text>
        
        <View style={{flexDirection:'row'}}>
        <Image style={styles.Image} source={src} />
        <Text style={styles.points}>290</Text>
        </View>
        

        
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My {routeName}</Text>
      </View>
    );
  }
};

export const TabBarIcon = ({ size, routeName, color }) => {
  let src = require('../assets/images/home.png');

  if (routeName === 'Menu') {
    src = require('../assets/images/menu.png');
  }

  if (routeName === 'Scan') {
    src = require('../assets/images/scan.png');
  }
  if (routeName === 'Gift') {
    src = require('../assets/images/gift.png');
  }
  if (routeName === 'Order') {
    src = require('../assets/images/order.png');
  }

  return (
    <Image
      source={src}
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
    />
  );
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  Image: {
    width: 35,
    height: 35,
    marginLeft:10
  },
  points: {
    color: "#505C2A",
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize:26
  },
});
