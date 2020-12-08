import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

export default function App() {
  console.log("Application is running on a device");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
      <Image source={{ width: 78, height: 78, uri: "https://i.imgur.com/ymMGe3O.png" }} />
      </TouchableWithoutFeedback>
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
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});
