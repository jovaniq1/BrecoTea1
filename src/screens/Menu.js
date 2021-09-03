import React from 'react';
import { View, SectionList, StyleSheet } from 'react-native';
import {Button} from '../components/Button'
import { useHomeData } from '../util/api';
import { Loading } from '../components/Loading';
import { ItemCard, SectionHeader, SectionFooter } from '../components/List';
import colors from '../constants/colors';



export const Favorites = ({ navigation }) => {
const { isLoading, data } = useHomeData();

const sections = data?.data?.map((section) => {
  return {
    ...section,
    data: section.items,
    items: undefined,
  };
});
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <SectionList
      style={styles.sectionList}
      contentContainerStyle={styles.content}
      sections={sections}
      renderItem={({ item }) => {
        return (
          <View style={{ backgroundColor: '#fff' }}>
            <ItemCard {...item} onPress={() => navigation.push('Details')} />
          </View>
        );
      }}
      renderSectionHeader={({ section }) => (
        <SectionHeader>{section.title}</SectionHeader>
      )}
      renderSectionFooter={() => <SectionFooter />}
      stickySectionHeadersEnabled={false}
    />
  );
};
export const Recents = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button onPress={() => navigation.push('Details')}>Recents</Button>
      
    </View>
  );
};


export const FullMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button onPress={() => navigation.push('Details')}>Full Menu</Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
});
