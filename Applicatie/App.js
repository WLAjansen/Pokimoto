import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OnboardingScreen from './src/screens/OnboardingScreen';
import OrderCompleteScreen from './src/screens/OrderCompleteScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DishesScreen from './src/screens/DishesScreen';

const AppStack = createStackNavigator();

function RouteStack() {
  return (
    <>
      <StatusBar style='light' />
        <AppStack.Navigator headerMode='none'>
          <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
          <AppStack.Screen name='OrderComplete'component={OrderCompleteScreen}/>
          <AppStack.Screen name='Tracking' component={TrackingScreen} />
        </AppStack.Navigator>
    </>
  );
}

const Tab = createBottomTabNavigator();

function RouteTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
      <Tab.Screen name='Dishes' component={DishesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Stacks' component={RouteStack} />
        <Stack.Screen name='RouteTabs' component={RouteTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
