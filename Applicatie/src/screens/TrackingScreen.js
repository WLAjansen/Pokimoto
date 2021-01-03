import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, OverlayComponent, onPress } from 'react-native';
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

  return (
    <View style={styles.container}>
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
    <TouchableOpacity onPress={() => { navigation.navigate('Restaurants')}} style={styles.quitTracking}><AntDesign name="appstore1" size={24} color="black" /></TouchableOpacity>
    <TouchableOpacity style={styles.trackingButton}><Text>Press Here</Text></TouchableOpacity>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  trackingButton: {
    position: 'absolute',
    right: 10, // inverted
    bottom: 10,
    zIndex: 2,
    width: '45%',
    flex: 0.5,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#FFFFFF',
  },
  quitTracking: {
    position: 'absolute',
    left: 95, // inverted
    bottom: 10,
    zIndex: 2,
    width: '20%',
    flex: 0.5,
    borderRadius: 10,
    height: 100,
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
