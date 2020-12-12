import * as React from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import screens 
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';

// Home screen: splash page with timer

function Welcome() {
  return (
    < SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}


// Welcome screen: login and register

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </SafeAreaView>
  );
}

// Navigator: Current page and go back button

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#000000', }} />
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
    backgroundColor: '#000000',
    fontFamily: 'Roboto',
  },
});


export default App;