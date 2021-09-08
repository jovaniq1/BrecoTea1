import React from 'react';
import { View, SectionList, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Button from '../components/Btn';
import { useHomeData } from '../util/api';
import { Loading } from '../components/Loading';
import { ItemCard, SectionHeader, SectionFooter } from '../components/List';
import colors from '../constants/colors';

export const Favorites = ({ navigation }) => {
const { isLoading, data } = useHomeData();


const favorites = data.data[0];
const items = favorites.items;

const onPress = ({ id, name, price, image, description}) => {
  navigation.push('Details', {
    id,
    name,
    price,
    image,
    description
  });
};

const renderItem = ({ item }) => {
 
return (
          <View style={{ backgroundColor: '#fff' }}>
            <ItemCard {...item} onPress={() => onPress(item)} />
          </View>
        );
};
  
  if (isLoading) {
    return <Loading />;
  }

  return (
<SafeAreaView>
    <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
  <View style={styles.dotLine} />
</SafeAreaView>

  );
};
export const Recents = ({ navigation }) => {

  const { isLoading, data } = useHomeData();

  const recents = data.data[1];
  const items = recents.items;

  const onPress = ({ id, name, price, image }) => {
    navigation.push('Details', {
      name, size, price, onPress, image, description
    });
  };
  
  const renderItem = ({ item }) => {
   
  return (
            <View style={{ backgroundColor: '#fff' }}>
              <ItemCard {...item} onPress={() => onPress(item)} />
              <View style={styles.dotLine} />
            </View>
          );
  };


  if (isLoading) {
    return <Loading />;
  }

  return (
    
    <SafeAreaView>
    <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
</SafeAreaView>
  );
};


export const FullMenu = ({ navigation }) => {
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
            <View style={styles.dotLine} />
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

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
  dotLine: {
    borderRadius: 1,
    //marginHorizontal: "6%",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "rgba(161,155,183,1)",
  },
});
