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
    title: 'Today',
    subtitle: 'All the restaurants',
    data: [
      {
        "userId": 1,
        "id": 1,
        "title": "Poké Market Amsterdam",
        "description": "Bij Poké Market kun je je Poké Bowl eten in het Instagram-waardige restaurant. Heb je geen zin om de deur uit te gaan? Je kunt het ook laten bezorgen via Pokimoto!",
        "description1": "The Poké Market is in het leven geroepen door twee studenten die in de begeerde Schinkelbuurt woonde tegenover het vondel park. Na lange college dagen en lange nachten in de stad, ploften zij op de bank en hadden ze geen idee wat ze moesten eten. Naast dat een maaltijd smaakvol moest zijn, moest het natuurlijk ook voedzaam zijn.",
        "description2": "Na tien tallen keren buiten de deur te hebben gegeten en talloze maaltijden hebben afgehaald waren ze het beu en besloten ze dit probleem aan te pakken. The Poké Market is ontstaan. Een smaakvol maar ook voedzaam concept. Een concept waar je al je vitamines, vezels en proteïne binnen kan krijgen en die ook nog heerlijk smaakt. Een plek die je meeneemt naar Hawaï. Door de verse vis, groenten en de exotische kleuren, krijg je al snel het gevoel dat je niet meer in Amsterdam bent.",
        "description3": "Het doel van The Poké Market is om de jongeren generatie gezonder door het leven te laten gaan. Gezond eten kan ook lekker zijn. Daarnaast streven ze ook naar een gezondere wereld doormiddel van kartonnen bakjes en samen te werken met Too Good To Go vechten we tegen voedselverspilling.",
        "location": "Zeilstraat 34, Amsterdam",
        uri: 'https://i.imgur.com/vR0qD2v.jpeg',
        },
        {
        "userId": 1,
        "id": 2,
        "title": "Konomi Haarlem",
        "description": "De nieuwe hotspot voor Poké Bowls en Japans dineren: Konomi.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Paarlaarsteeg 7, 2011TA Haarlem",
        uri: 'https://i.imgur.com/Am0GXzS.jpeg',
        },
        {
        "userId": 1,
        "id": 3,
        "title": "Ohana Poké Den Haag",
        "description": "Een knus restaurant met een frisse uitstraling. Laat je het liever bezorgen? Dat kan ook via Pokimoto.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Prinsestraat 18, Den Haag",
        uri: 'https://i.imgur.com/5udjQhd.jpeg',
        },
        {
        "userId": 1,
        "id": 4,
        "title": "Sushito Amsterdam",
        "description": "Sushito heeft drie locaties in Amsterdam. Door de inrichting waan je je in een jungle met een Poké Bowl on the side.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Jan Pieter Heijestraat 127, Amsterdam (Oud-West)"
        },
        {
        "userId": 1,
        "id": 5,
        "title": "Poké House Arnhem",
        "description": "Poké House is het eerste restaurant in Arnhem waar ze Poké Bowls verkopen. Een goede Instagramfoto gegarandeerd tijdens een avondje uiteten. Bezorgen is ook hier een optie via de Pokimoto app.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Marienburgstraat 8, Arnhem"
        },
        {
        "userId": 1,
        "id": 6,
        "title": "Poké Bowl Rotterdam",
        "description": "In Rotterdam is – naar eigen zeggen - het eerste Poké Bowl restaurant geopend in 2016.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Karel doormanstraat 457A, Rotterdam"
        },
        {
        "userId": 1,
        "id": 7,
        "title": "Poke Perfect Utrecht",
        "description": "Super Pokebowls!",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Korte Jansstraat 17, Utrecht"
        },
        {
        "userId": 1,
        "id": 8,
        "title": "Bowls and Buns in Market 33",
        "description": "Even snel een poké bowl happen kan bij Bowls and Buns in de foodhallen van de Zuidas: Market 33.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Market 33"
        },
        {
        "userId": 1,
        "id": 9,
        "title": "Bar Sue",
        "description": "Op de kaart staan zes Sue Bowls die je kunt tweaken naar je eigen smaak. Witte rijst of bruine rijst? Zalm of kip? Het is aan jou.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Insulindeweg 1, Amsterdam Oost"
        },
        {
        "userId": 1,
        "id": 10,
        "title": "Bar Mowgli",
        "description": "Op de kaart staat een bonte collectie van Aziatisch (geïnspireerde) gerechten en smaken. Zo ook een bowl met nori, zalm, avocado, sushirijst, Japanse mayo en zalmkaviaar.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Beukenplein 50, Amsterdam"
        },
        {
        "userId": 1,
        "id": 11,
        "title": "STACH Asian food court",
        "description": "STACH winkel in Amsterdam Oud-West op de Overtoom (kruising Constantijn Huygensstraat) heeft stapels gezonde sushi salades, poké bowls, sashimi en nog meer rauwe vis lekkernijen om mee te nemen.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Overtoom 112, Amsterdam"
        },
        {
        "userId": 1,
        "id": 12,
        "title": "Sushilee",
        "description": "verfijnde poké bowl met sticky sushirijst getopt met gemarineerde paddenstoelen, paling, garnaal, zalm, tonijn, krab, knapperige norivellen en avocado.",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "George Gershwinlaan 534, Amsterdam"
        },
        {
        "userId": 1,
        "id": 13,
        "title": "Temakery",
        "description": "Pokebowls at it's finest!",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Ferdinand Bolstraat 128, Amsterdam"
        },
        {
        "userId": 1,
        "id": 14,
        "title": "Bowlsnrolls",
        "description": "Bowl’s n rolls is het eerste echte poké bowl restaurant van Leeuwarden en staat voor gemak en kwaliteit! ",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
        "location": "Naauw 5, Leeuwarden"
        },
        {
        "userId": 1,
        "id": 15,
        "title": "The Avocado Show",
        "description": "Great Poke bowls",
        "description1": "Als je fan bent van kwalitatief goede sushi dan mag je Konomi zeker niet missen. Om de hoek van de Grote Kerk vind je dit smalle zaakje dat geheel in Japanse stijl is gehuld. Compleet met rode lampions en Japanse gordijntjes. Eigenaresse Tia Swierts komt uit een horeca gezin en maakte al jaren sushi. Een eigen sushizaak openen was dan ook een logische stap. ",
        "description2": "Ze startte een crowdfundingcampagne en haalde al binnen 40 minuten het benodigde bedrag binnen. Het was duidelijk; Haarlem stond te poppelen om haar zaak! Naast de wat bekendere sushivarianten kun je hier ’s middags poké bowls snoepen en je vindt hier ook creatieve varianten zoals haar signature Konomi soft shell crab roll. Een plaatje om te zien en een feest om van te eten.",
        "description3": " Persoonlijke aandacht en een goede service is naast geweldige gerechten serveren voor Tia en haar team prioriteit nummer één. Niet zo gek dus dat ze inmiddels een trouwe groep vaste gasten hebben.",
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
