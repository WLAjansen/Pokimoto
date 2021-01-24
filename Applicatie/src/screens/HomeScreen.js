import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode='cover'
      />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
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

  function renderHeader() {
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

  function renderContentBody() {
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
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        {renderHeader()}
        {renderContentBody()}
      </SafeAreaView>
    );
  }
};

const SECTIONS = [
  {
    subtitle: 'Jouw favorieten',
    horizontal: true,
    data: [
      {
        key: '1',
        text: '    Honolulu     ',
        title: 'Honolulu Poke Bowl',
        body: 'lorem ipsum',
        rating: 5,
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
      },
      {
        key: '2',
        text: '       Tokyo        ',
        title: 'Tokyo Poke Bowl',
        body: 'lorem ipsum',
        rating: '5 sterren',
        price: 15,
        protein: 'Salmon',
        size: 'Medium',
        uri: 'https://i.imgur.com/QqO13hE.png',
      },

      {
        key: '3',
        text: '         Bali          ',
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
        text: '        Jeju         ',
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
        text: '        Taipei       ',
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
    title: '',
    subtitle: 'Meer informatie',
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
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  renderHeaderBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: -8,
    marginTop: 50,
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
  itemPhoto: {
    width: '100%',
    height: 125,
    borderRadius: 6,
  },
  itemPhotoLarge: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
