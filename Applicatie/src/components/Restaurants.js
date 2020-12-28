import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class ScrollViewExample extends Component {
   state = {
      restaurants: [
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 1},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 2},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 3},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 4},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 5},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 6},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 7},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 8},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 9},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 10},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 11},
         {'name': 'Restaurant one', 'image': {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'}, 'id': 12}
      ]
   }
   render() {
      return (
            <ScrollView>
               {
                  this.state.restaurants.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                         <Image style={styles.innerLogo} source={item.image} />
                        <Text style={styles.innerHeader}>{item.name}</Text>
                        <AntDesign style={styles.innerIcon} name="right" size={12} color="white" />
                     </View>
                  ))
               }
            </ScrollView>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: '90%',
      margin: 10,
      borderRadius: 8,
      padding: 10,
      borderColor: '#343434',
      borderWidth: 1,
      backgroundColor: '#000000',
      fontFamily: 'Sharp-Sans-Bold'
   },
   innerLogo: {
    flex: 0.25  ,
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  innerHeader: {
    flex: 0.5,
      color: 'white',
  },
  innerIcon: {
    flex: 0.1,
  }
})