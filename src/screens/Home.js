import React from 'react';
import { View } from 'react-native';

import { Button } from '../components/Button';
import { useHomeData } from '../util/api';
import { Loading } from '../components/Loading';

export const Home = ({ navigation }) => {
  const response = useHomeData();

  if (response.isLoading) {
    return <Loading />;
  }
  console.log(response);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button onPress={() => navigation.push('Menu')}>Home</Button>
    </View>
  );
};
