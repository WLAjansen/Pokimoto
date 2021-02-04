import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, Modal, FlatList, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });

  useEffect(() => {
    fetch('http://wlajansen.nl/data/restaurants.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function RenderHeaderBlock() {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.renderHeaderBack}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('RouteTabs');
          }}
        >
          <AntDesign name='left' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toLowerCase()
          : ''.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.3,
          width: '100%',
          backgroundColor: '#343434',
        }}
      />
    );
  };

  const ItemLinkView = ({ item }) => {
    return (
      // Flat List Item Separator
      <AntDesign style={styles.innerIcon} name="right" size={14} color="#888888" />
    );
  };


  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title.toLowerCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
      <RenderHeaderBlock />
        <Text style={styles.innerHeader}>Search</Text>
        <SearchBar
          searchIcon={{ size: 20 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search"
          value={search}
          clearIcon
          inputContainerStyle={{backgroundColor: '#181818'}}
          leftIconContainerStyle={{backgroundColor: '#181818'}}
          inputStyle={{backgroundColor: '#181818'}}
          containerStyle={{
          backgroundColor: 'black',
          borderRadius: 30,
          justifyContent: 'space-around',
          borderTopWidth:0,
          borderBottomWidth:0,
          }}
        />
        <FlatList
          style={styles.flatList}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
        </View>
    </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'black',
    padding: 6,
  },
  innerHeader: {
    fontSize: 28,
    paddingLeft: '3%',
    paddingBottom: 10,
    fontFamily: 'Sharp-Sans-Bold',
    color: 'white',
  },
  renderHeaderBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: -8,
    paddingBottom: 10,
  },
  renderHeaderText: {
    height: 40,
    color: 'white',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 16,
    lineHeight: 37,
    paddingRight: 50,
    borderRadius: 6,
    paddingLeft: 50,
    marginLeft: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  itemStyle: {
    padding: 10,
    fontFamily: 'Sharp-Sans-Medium',
    color: '#C1C1C1',
    fontSize: 13
  },
  searchBar: {
    fontSize: 16,
  }
});

export default App;
