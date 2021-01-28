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
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

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


  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.innerItem} onPress={() => navigation.navigate('RestaurantDetails', item)}>
      <View>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubTitle}>{item.location}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const RestaurantsScreen = () => {
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
          onPress={() => {navigation.goBack()}}
        >
          <AntDesign name='left' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.renderHeaderText}>Restaurants</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('Dishes');
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
    title: 'All of our restaurants',
    subtitle: '',
    data: [
      {
        "userId": 1,
        "id": 1,
        "title": "Poké Market Amsterdam",
        "description": "Bij Poké Market kun je je Poké Bowl eten in het Instagram-waardige restaurant. Heb je geen zin om de deur uit te gaan? Je kunt het ook laten bezorgen via Pokimoto!",
        "location": "Zeilstraat 34, Amsterdam",
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
        },
        {
        "userId": 1,
        "id": 2,
        "title": "Konomi Haarlem",
        "description": "De nieuwe hotspot voor Poké Bowls en Japans dineren: Konomi.",
        "location": "Paarlaarsteeg 7, 2011TA Haarlem",
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
        },
        {
        "userId": 1,
        "id": 3,
        "title": "Ohana Poké Den Haag",
        "description": "Een knus restaurant met een frisse uitstraling. Laat je het liever bezorgen? Dat kan ook via Pokimoto.",
        "location": "Prinsestraat 18, Den Haag",
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
        },
        {
        "userId": 1,
        "id": 4,
        "title": "Sushito Amsterdam",
        "description": "Sushito heeft drie locaties in Amsterdam. Door de inrichting waan je je in een jungle met een Poké Bowl on the side.",
        "location": "Jan Pieter Heijestraat 127, Amsterdam (Oud-West)"
        },
        {
        "userId": 1,
        "id": 5,
        "title": "Poké House Arnhem",
        "description": "Poké House is het eerste restaurant in Arnhem waar ze Poké Bowls verkopen. Een goede Instagramfoto gegarandeerd tijdens een avondje uiteten. Bezorgen is ook hier een optie via de Pokimoto app.",
        "location": "Marienburgstraat 8, Arnhem"
        },
        {
        "userId": 1,
        "id": 6,
        "title": "Poké Bowl Rotterdam",
        "description": "In Rotterdam is – naar eigen zeggen - het eerste Poké Bowl restaurant geopend in 2016.",
        "location": "Karel doormanstraat 457A, Rotterdam"
        },
        {
        "userId": 1,
        "id": 7,
        "title": "Poke Perfect Utrecht",
        "description": "Super Pokebowls!",
        "location": "Korte Jansstraat 17, Utrecht"
        },
        {
        "userId": 1,
        "id": 8,
        "title": "Bowls and Buns in Market 33",
        "description": "Even snel een poké bowl happen kan bij Bowls and Buns in de foodhallen van de Zuidas: Market 33.",
        "location": "Market 33"
        },
        {
        "userId": 1,
        "id": 9,
        "title": "Bar Sue",
        "description": "Op de kaart staan zes Sue Bowls die je kunt tweaken naar je eigen smaak. Witte rijst of bruine rijst? Zalm of kip? Het is aan jou.",
        "location": "Insulindeweg 1, Amsterdam Oost"
        },
        {
        "userId": 1,
        "id": 10,
        "title": "Bar Mowgli",
        "description": "Op de kaart staat een bonte collectie van Aziatisch (geïnspireerde) gerechten en smaken. Zo ook een bowl met nori, zalm, avocado, sushirijst, Japanse mayo en zalmkaviaar.",
        "location": "Beukenplein 50, Amsterdam"
        },
        {
        "userId": 1,
        "id": 11,
        "title": "STACH Asian food court",
        "description": "STACH winkel in Amsterdam Oud-West op de Overtoom (kruising Constantijn Huygensstraat) heeft stapels gezonde sushi salades, poké bowls, sashimi en nog meer rauwe vis lekkernijen om mee te nemen.",
        "location": "Overtoom 112, Amsterdam"
        },
        {
        "userId": 1,
        "id": 12,
        "title": "Sushilee",
        "description": "verfijnde poké bowl met sticky sushirijst getopt met gemarineerde paddenstoelen, paling, garnaal, zalm, tonijn, krab, knapperige norivellen en avocado.",
        "location": "George Gershwinlaan 534, Amsterdam"
        },
        {
        "userId": 1,
        "id": 13,
        "title": "Temakery",
        "description": "Pokebowls at it's finest!",
        "location": "Ferdinand Bolstraat 128, Amsterdam"
        },
        {
        "userId": 1,
        "id": 14,
        "title": "Bowlsnrolls",
        "description": "Bowl’s n rolls is het eerste echte poké bowl restaurant van Leeuwarden en staat voor gemak en kwaliteit! ",
        "location": "Naauw 5, Leeuwarden"
        },
        {
        "userId": 1,
        "id": 15,
        "title": "The Avocado Show",
        "description": "Great Poke bowls",
        "location": "Daniël Stalpertstraat 61, Amsterdam"
        },
    ],
  },
];

export default RestaurantsScreen;

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
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 20
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
    marginBottom: 7,
    marginTop: 10
  },
  itemSubTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 3,
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
