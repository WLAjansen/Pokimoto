import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, StatusBar, SafeAreaView, OverlayComponent, onPress } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

const TrackingScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 52.370216,
    longitude: 4.895168,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });

  function RenderHeaderTitle() {
    const [currentDate, setCurrentDate] = useState('');
    const [currentDate2, setCurrentDate2] = useState('');
    let [fontsLoaded] = useFonts({
      'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
      'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
      'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
    });
    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate2(
         hours + ':' + min 
      );
    }, []);
    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours() + 1; //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(
         hours + ':' + min 
      );
    }, []);
    return (
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('RouteTabs')}
        >
          <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerSubTitle}>{currentDate2} - {currentDate}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <StatusBar hidden />
    <RenderHeaderTitle />
    <MapView style={styles.map}
      region={region}
      minZoomLevel={2}
      onRegionChangeComplete={region => setRegion(region)}
      customMapStyle={mapStyle}
    >
      <Marker
      coordinate={{ latitude: 52.371497, longitude: 4.892910 }}
      style={styles.dotImage} image={require("../assets/dot.png")}
      />
    </MapView>
    <View style={styles.trackingContainer}>
    <TouchableOpacity style={styles.trackingButton}><Text style={{fontFamily: 'Sharp-Sans-Bold'}}>Bezorger melden</Text><AntDesign style={{paddingLeft: 20}} name="flag" size={24} color="black" /></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigation.navigate('RouteTabs')}} style={styles.quitTracking}><MaterialCommunityIcons style={{marginLeft: 5}} name="export" size={25} color="black" /></TouchableOpacity>
    </View>
    </View>
  );
};

export default TrackingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 20,
    left: 10,
  },
  headerSubTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Sharp-Sans-Bold'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  trackingContainer: {
    position: 'absolute',
    justifyContent: 'space-around',
    width: '100%',
    zIndex: 2,
    bottom: 10,

    flexDirection: 'row'
  },
  trackingButton: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  quitTracking: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#54FA9C',
  },
  titleOrderStatus: {
    color: '#000000',
    fontSize: 20,
  },
  timeOrderStatus: {
    color: '#54FA9C',
    fontSize: 12,
  },
  dotImage: {
    width: 100,
  }
});
