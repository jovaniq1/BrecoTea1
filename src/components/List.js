import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from './Text';
import { money } from '../util/format';
import colors from '../constants/colors';
import { color } from 'react-native-reanimated';
import  COLORS from '../constants/colors'
import Button from './Btn';

const screen = Dimensions.get('window');

const addOrder = () => {
  alert('add funds');
};

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    //padding: 10,
    justifyContent:'flex-start',
    padding:screen.width * 0.1,
    //alignSelf:'center',
    flexDirection:'row',
    height: screen.height * 0.2,
  },
  itemImage: {
    alignSelf:'center',
    //justifyContent:'flex-start',
    width: screen.width * 0.3,
    height: screen.width * 0.3,
    borderRadius:75
  },
  cardTitle: {
    fontWeight: 'bold',
    color:COLORS.darkGreen,
    fontSize:screen.width * 0.3/5,
   // marginVertical: 5,
    //alignSelf:'center',
    
  },
  priceSize:{
    fontSize:screen.width * 0.2/8,
    

  },
  container: {
   //justifyContent:'space-between',
  // justifyContent:'flex-start',
  paddingLeft:screen.width * 0.1/2,
   alignContent:'space-between'
   // flexDirection:'row'

  },
 
  description:{
  fontSize:screen.width * 0.2/6,
  paddingTop:5
  },
  
  sectionHeader: {
    paddingTop: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  button: {
    alignSelf: 'center',
    width:screen.width * 0.1/3,
    textAlign: 'center',
  },
});

export const ItemCard = ({ name, size, price, onPress, image, description }) => (
  <TouchableOpacity style={styles.itemCard} onPress={onPress}>
  
    <Image
      source={{ uri: image }}
      style={styles.itemImage}
      resizeMode="cover"
    />
    <View style={styles.container}>
    <Text style={styles.cardTitle}>{name}</Text>
    <Text style={styles.priceSize}>{size} | {money(price)} </Text>
    <Text style={styles.description}>- {description}</Text>
    <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', margin:20}}>
    <TouchableOpacity onPress={onPress} >
        <Text style={{color:COLORS.darkGreen, fontWeight:'bold', fontSize:12, marginRight:10}}>View details</Text>
      </TouchableOpacity>
    <Button style={styles.button}
        text='Add to order'
        onPress={addOrder}
        size='small'
       // fontSize='12'
      />
   
      
    </View>
  </View>
    
  </TouchableOpacity>
  
);

export const SectionHeader = ({ children }) => (
  <View style={styles.sectionHeader}>
    <Text type="header">{children}</Text>
  </View>
);

export const SectionFooter = () => (
  <View style={{ flex: 1, backgroundColor: colors.border, height: 1 }} />
);