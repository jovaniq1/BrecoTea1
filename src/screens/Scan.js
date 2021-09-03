import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import colors from '../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let balance = parseFloat(32.4).toFixed(2);

const onPress = () => {
  alert('add funds');
};
export const Scan = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.balance}>Current balance: ${balance}</Text>
        <View style={styles.qrContainer}>
          <Image
            style={styles.qr}
            source={require('../assets/images/qr.png')}
          />
        </View>
        <Text style={styles.points}>Scan to earn points</Text>
        <Text style={styles.points2}>
          Scan your code at the register to pay and earn points toward your next
          reward.
        </Text>
        <Button style={styles.button} title="Add funds" onPress={onPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
    backgroundColor: colors.greenYellow,
    //justifyContent:'center'
  },
  qrContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    //height: windowWidth*.7,
    // width:windowWidth*.7,
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.04,
    backgroundColor: colors.white,
    //borderRadius:10,
  },
  qr: {
    alignSelf: 'center',
    height: windowWidth * 0.7,
    width: windowWidth * 0.7,
    borderWidth: 20,

    borderColor: colors.white,
    //justifyContent:'space-around'
  },
  balance: {
    marginTop: windowHeight * 0.05,
    color: colors.darkGreen,
    alignSelf: 'center',
    fontSize: (windowWidth * 0.1) / 5,
    fontWeight: 'bold',
  },
  points: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: (windowWidth * 0.1) / 2,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.01,
  },
  points2: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: (windowWidth * 0.1) / 3,
    marginHorizontal: windowWidth * 0.1,
    textAlign: 'center',
    marginBottom: windowHeight * 0.03,
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});
