import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes() + 30; //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
       hours + ':' + min 
    );
  }, []);
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.innerItem} onPress={() => navigation.navigate('Details', item)}>
      <View>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode='cover'
      />
      <Text style={styles.itemSubTitle}>{item.title}</Text>
      <Text style={styles.itemTitle}>{item.short}</Text>
      <Text style={styles.itemDescription}>{item.body}</Text>
      <Text style={styles.itemTime}>{currentDate}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });

  function RenderHeader() {
    return (
      <SafeAreaView style={styles.renderHeaderBack}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='left' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.renderHeaderText}>Favorieten</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('Payment');
          }}
        >
          <AntDesign name='search1' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  function RenderContentBody() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <Text style={styles.sectionSubTitle}>{section.subtitle}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    );
  }

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color='#ffffff' />;
  } else {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <StatusBar style='light' />
        <RenderHeader />
        <RenderContentBody />
      </View>
      </SafeAreaView>
    );
  }
};

const SECTIONS = [
  {
    title: 'Today',
    subtitle: 'Personal favorites',
    data: [
      {
        key: '1',
        short: 'Classic Tuna with vegetables and extras',
        type: 'Poke bowl',
        title: 'Honolulu Poke Bowl',
        body: 'Met tonijn, avocado, mais, kerstomaatjes, komkommer, wortel, rode kool & sriracha mayonaise.',
        rating: 5,
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
      },
      {
        key: '2',
        short: 'Poke bowl with tuna, wasabi and sushi rice',
        type: 'Poke bowl',
        title: 'Tokyo Poke Bowl',
        body: 'Met sushirijst, rauwe tonijn en groentes. En vergeet de ingemaakte shiitakes niet!',
        rating: '5',
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/98dgjV4.jpeg',
      },

      {
        key: '3',
        short: 'Bali',
        type: 'Poke bowl',
        title: 'Bali Poke Bowl',
        body: 'lorem ipsum',
        rating: 5,
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      },
      {
        key: '4',
        short: 'Jeju',
        type: 'Poke bowl',
        title: 'Jeju Poke Bowl',
        body: 'lorem ipsum',
        rating: 5,
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/iO4FRur.png',
      },
      {
        key: '5',
        short: 'Taipei',
        type: 'Poke bowl',
        title: 'Honolulu Poke Bowl',
        body: 'lorem ipsum',
        rating: 5,
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
      },
    ],
  },
  {
    title: 'More poke bowls',
    subtitle: 'Others favorites',
    data: [
      {
        key: '1',
        uri: 'https://i.imgur.com/Vt3PnU5.jpeg',
      },
      {
        key: '2',
        uri: 'https://i.imgur.com/4txvT81.jpg',
      },

      {
        key: '3',
        uri: 'https://i.imgur.com/jgwyPYl.jpeg',
      },
      {
        key: '4',
        uri: 'https://i.imgur.com/GUeOWyI.jpg',
      },
    ],
  },
];

export default HomeScreen;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    margin: 6,
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
  sectionHeader: {
    fontWeight: '500',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 24,
    color: '#f4f4f4',
    marginLeft: 5,
  },
  sectionSubTitle: {
    fontWeight: '800',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 14,
    color: '#404040',
    margin: 4,
  },
  item: {
    margin: 5,
  },
  innerItem: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#181818',
    paddingBottom: 20,
  },
  itemPhoto: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  itemPhotoLarge: {
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    fontFamily: 'Sharp-Sans-Bold',
    color: 'white',
    fontSize: 20,
    maxWidth: '90%',
    lineHeight: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7
  },
  itemSubTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3
  },
  itemDescription: {
    fontFamily: 'Sharp-Sans-Medium',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    lineHeight: 18,
    maxWidth: '80%',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3
  },
  itemTime: {
    fontFamily: 'Sharp-Sans-Medium',
    color: '#606060',
    fontSize: 14,
    lineHeight: 18,
    maxWidth: '80%',
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    marginBottom: 3
  }
});
