import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

let customFonts = {
   'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
 };

class Restaurants extends Component {
   state = {
      fontsLoaded: false,
      restaurants: [
         {'name': 'Poke Perfect', 'image': require('../assets/restaurants/pokeperfect.jpg'), 'id': 1},
         {'name': 'The Avocado Show', 'image': require('../assets/restaurants/theavocadoshow.jpg'), 'id': 2},
         {'name': 'The Poké Market', 'image': require('../assets/restaurants/thepokemarket.jpg'), 'id': 3},
         {'name': 'The Poké Box Weena', 'image': require('../assets/restaurants/thepokeboxweena.jpg'), 'id': 4},
         {'name': 'Ramen Ohashi', 'image': require('../assets/restaurants/ramenohashi.jpg'), 'id': 5},
         {'name': 'Momiji Sushi', 'image': require('../assets/restaurants/momijisushi.jpg'), 'id': 6},
         {'name': 'Shibuya', 'image': require('../assets/restaurants/shibuya.jpg'), 'id': 7},
         {'name': 'Ramen Ya', 'image': require('../assets/restaurants/ramenya.jpg'), 'id': 8}
      ]
   }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
   render() {
      if (this.state.fontsLoaded) {;
      return (
            <ScrollView>
               {
                  this.state.restaurants.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                         <Image style={styles.innerLogo} source={item.image} />
                        <Text style={styles.innerHeader}>{item.name}</Text>
                        <AntDesign style={styles.innerIcon} name="right" size={14} color="#888888" />
                     </View>
                  ))
               }
            </ScrollView>
      );
   } else {
      return <ActivityIndicator size="large" color="#ffffff" />;
   }
  }
}
export default Restaurants

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: '90%',
      fontWeight: 'bold',
      margin: 10,
      borderRadius: 8,
      padding: 10,
      borderWidth: 1,
      backgroundColor: '#000000',
   },
   innerLogo: {
    flex: 0.22,
    width: 50,
    height: 45,
    borderRadius: 8,
  },
  innerHeader: {
    flex: 0.6,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
  },
  innerIcon: {
    flex: 0.040,
  }
})