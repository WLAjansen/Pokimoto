import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, Platform, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

export default function App() {
  console.log("Application is running on a device");
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/icon.png')} />
      <Text style={styles.titleText}>Pokimoto</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  titleText: {
    color: '#fff',
    fontSize: 36,
    padding: 20,
    fontFamily: Platform.OS === "ios" ? 'System' : 'Roboto',
    fontWeight: 'bold'
  }
});
