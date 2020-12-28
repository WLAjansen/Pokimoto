import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView, onPress } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

import Restaurants from '../components/Restaurants';
import { ScrollView } from 'react-native-gesture-handler';

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
        <Text style={styles.text}>Poke bowls</Text>
        <ScrollView>
        <View style={styles.item}>
          <Text style={styles.paragraph}>
           Eigen Poke Bowl maken
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}><Text style={{fontFamily: 'Sharp-Sans-Bold' }}>-30%</Text></TouchableOpacity>
        </View>
       <Restaurants />
       </ScrollView>
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
    backgroundColor: '#54FA9C',
    flex: 0.19,
    height: '100%',
    width: 10,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    fontFamily: 'Sharp-Sans-Medium'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    margin: 10,
    borderRadius: 8,
    padding: 10,
    height: 65,
    backgroundColor: '#181818',
  },
  text: {
    fontSize: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 10,
    color: 'white',
    fontFamily: 'Sharp-Sans-Bold'
  },
  paragraph: {
    color: 'white',
    flex: 0.8,
    padding: 10,
    fontFamily: 'Sharp-Sans-Medium'
  }
});

export default RestaurantScreen;
