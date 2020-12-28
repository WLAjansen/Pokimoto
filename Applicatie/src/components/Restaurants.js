import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class ScrollViewExample extends Component {
   state = {
      restaurants: [
         {'name': 'Bali', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-cce2e85427df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}, 'id': 1},
         {'name': 'Tokyo', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-704dadc2b747?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'}, 'id': 2},
         {'name': 'Honolulu', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}, 'id': 3},
         {'name': 'Jeju', 'image': {uri: 'https://images.unsplash.com/photo-1556040221-a1efce785fcc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'}, 'id': 4},
         {'name': 'Bali', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-cce2e85427df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}, 'id': 5},
         {'name': 'Tokyo', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-704dadc2b747?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'}, 'id': 6},
         {'name': 'Honolulu', 'image': {uri: 'https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}, 'id': 7},
         {'name': 'Jeju', 'image': {uri: 'https://images.unsplash.com/photo-1556040221-a1efce785fcc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'}, 'id': 8}
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
                        <AntDesign style={styles.innerIcon} name="right" size={14} color="white" />
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
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      margin: 10,
      borderRadius: 8,
      padding: 10,
      borderWidth: 1,
      backgroundColor: '#000000',
   },
   innerLogo: {
    flex: 0.25  ,
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  innerHeader: {
    flex: 0.5,
    fontSize: 16,
    color: 'white',
  },
  innerIcon: {
    flex: 0.1,
  }
})