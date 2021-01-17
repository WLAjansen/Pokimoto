import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View,SectionList,SafeAreaView,Image, FlatList, ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode='cover'
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });
  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#ffffff" />;
  } else {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <SafeAreaView style={{ flex: 1, marginTop: 50, }}>
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
    </View>
  );
   }
};

const SECTIONS = [
  {
    title: 'Favorieten',
    subtitle: 'Jouw favorieten',
    horizontal: true,
    data: [
      {
        key: '1',
        text: '    Honolulu     ',
        rating: 5,
        body: 'lorem ipsum',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      },
      {
        key: '2',
        text: '       Tokyo       ',
        rating: 5,
        body: 'lorem ipsum',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      },

      {
        key: '3',
        text: '         Bali         ',
        rating: 5,
        body: 'lorem ipsum',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      },
      {
        key: '4',
        text: '        Jeju        ',
        rating: 5,
        body: 'lorem ipsum',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      },
      {
        key: '5',
        text: 'Item text 5',
        rating: 5,
        body: 'lorem ipsum',
        uri: 'https://i.imgur.com/MSBX5gq.jpg',
      }
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
  sectionHeader: {
    fontWeight: '800',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 24,
    color: '#f4f4f4',
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 15,
  },
  sectionSubTitle: {
    fontWeight: '800',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 14,
    color: '#404040',
    margin: 5,
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
