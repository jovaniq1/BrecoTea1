import React from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;


const Button = ({ text, onPress, type = 'filled', borderRadius, size = 'large' }) => {

  const textCommonStyle = {
    color: 'black',
    fontSize: width*.3/6,
    justifyContent:"center",
    
    //fontWeight:'bold',
    
  }
  const dottedLine = {
    borderRadius: 1,
    marginHorizontal: "6%",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "rgba(161,155,183,1)",
      
  }
  const containerBtnStyle = {
    flexDirection:'row',
    justifyContent:'space-between' ,
    margin:width*.1,

    marginVertical:width*.1/3,
    
  }
  const image = { 
    width: width*.1/2,
    height: width*.1/2
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={containerBtnStyle}>
        <Text style={textCommonStyle}> {text} </Text>
        <Image style={image} source={require('../assets/images/greaterThan.png')}/>
      </View>
      <View style={dottedLine} />
    </TouchableOpacity>
  )
}

export default Button