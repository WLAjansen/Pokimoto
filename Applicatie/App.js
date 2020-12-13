import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Font from 'expo-font';
import WelcomeAsset from './app/screens/WelcomeAsset';
import HomeAsset from './app/screens/HomeAsset';

// const fetchFonts = () => {
//   return Font.loadAsync({
//   'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
//   'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
//   'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
//   });
//   };

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WelcomeAsset />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeAsset />
      <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.button}>
        <Text style={styles.buttonText}>Afrekenen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeAsset />
      <Button
        title="Go to Details" color="black"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: "black",
    paddingRight: 100,
    paddingLeft: 100,
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 8,
    color: '#fff',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  }, 
});

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
    </SettingsStack.Navigator>
  );
}

const DetailsStack = createStackNavigator();

function DetailsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Details" component={SettingsScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
      <SettingsStack.Screen name="Settings" component={DetailsScreen} options={{ headerStyle: { backgroundColor:'#000000'},  headerTintColor: '#fff', }} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Details') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          inactiveBackgroundColor: 'black',
          activeBackgroundColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Details" component={DetailsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
