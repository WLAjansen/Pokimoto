import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, onPress } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const {loading} = this.state

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate('Settings');}}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  button: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

export default Home;
