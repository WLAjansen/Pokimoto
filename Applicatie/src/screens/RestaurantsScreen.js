import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

import Restaurants from '../components/Restaurants';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });
  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#ffffff" />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
       <Restaurants />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#000000'
  },
  button: {
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: "#343434",
    borderRadius: 8,
    height: 100,
    width: '90%'
  }
});

export default RestaurantScreen;
