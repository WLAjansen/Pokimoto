import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import OrderCompleteScreen from './src/screens/OrderCompleteScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen'

const AppStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="OrderComplete" component={OrderCompleteScreen} />
          <AppStack.Screen name="Restaurants" component={RestaurantsScreen} />
          <AppStack.Screen name="Home" component={HomeScreen} />
          <AppStack.Screen name="Tracking" component={TrackingScreen} />
          <AppStack.Screen name="Payment" component={PaymentScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
