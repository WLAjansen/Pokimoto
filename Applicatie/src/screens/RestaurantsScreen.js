import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator, SafeAreaView, onPress } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Restaurants from '../components/Restaurants';
import BasicModal from '../components/BasicModal';
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
        <Text style={styles.text}>Restaurants</Text>
        <ScrollView>
        <View style={styles.item}>
          <Text style={styles.paragraph}>
           Eigen Poke Bowl maken
          </Text>
          <TouchableOpacity style={styles.button}><BasicModal /></TouchableOpacity>
          </View>
        <Text style={styles.smallText}>Favorieten</Text>
       <Restaurants />
       </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000000'
  },
  button: {
    flex: 0.30,
    marginBottom: '6%',
  },
  buttonLogo: {
    lineHeight: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#343434',
    padding: 10,
    height: '8%',
  },
  text: {
    fontSize: 28,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 10,
    color: 'white',
    fontFamily: 'Sharp-Sans-Bold'
  },
  smallText: {
    fontSize: 14,
    paddingLeft: '7%',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#404040',
    fontFamily: 'Sharp-Sans-Medium'
  },
  paragraph: {
    color: 'white',
    flex: 0.8,
    padding: 10,
    fontFamily: 'Sharp-Sans-Medium'
  }
});

export default RestaurantScreen;
