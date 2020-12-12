import * as React from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import screens 
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';

// Home screen: splash page with timer

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

// Welcome screen: login and register

function Welcome() {
  return (
    < SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

// Navigator: Current page and go back button

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// StyleSheet: all general styles for every page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;