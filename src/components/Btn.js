import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import COLORS from '../constants/colors'

const width = Dimensions.get('window').width


const Button = ({ text, onPress, type = 'filled', borderRadius, size , fontSize}) => {
  const large = width*.1/2
  const small = width *.8/3

  const btnSize = size === 'large' ? large : small
  const btnBgColor = type = COLORS.darkGreen
  const btnTextColor = type =COLORS.white
  const btnBorderRadius = 40

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 5,
    paddingHorizontal:1,
    width: btnSize,
    borderRadius: btnBorderRadius,
    alignSelf:'center',
  }

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 12,
    fontWeight:'bold',
    textAlign: 'center',
    
  }

  const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button