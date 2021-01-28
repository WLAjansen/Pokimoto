import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import OnboardingScreen from './src/screens/OnboardingScreen';
import OrderCompleteScreen from './src/screens/OrderCompleteScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import DishesScreen from './src/screens/DishesScreen';
import RestaurantsDetailScreen from './src/screens/RestaurantsDetailScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import AccountScreen from './src/screens/AccountScreen';

const AppStack = createStackNavigator();

function RouteStack() {
  return (
    <>
      <StatusBar style='light' />
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
        <AppStack.Screen name='OrderComplete' component={OrderCompleteScreen} />
        <AppStack.Screen name='Tracking' component={TrackingScreen} />
        <AppStack.Screen name='Details' component={DetailsScreen} />
        <AppStack.Screen name='RestaurantDetails' component={RestaurantsDetailScreen} />
        <AppStack.Screen name='Dishes' component={DishesScreen} />
        <AppStack.Screen name='Payment' component={PaymentScreen} />
      </AppStack.Navigator>
    </>
  );
}

const Tab = createMaterialBottomTabNavigator();

function RouteTabs() {
  return (
    <Tab.Navigator
      headerMode='none'
      initialRouteName='Home'
      activeColor='#f0edf6'
      barStyle={{ backgroundColor: '#000000' }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='apps' color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name='Restaurants'
        component={RestaurantsScreen}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='all-inclusive' color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account-circle' color={color} size={20} />
          ),
        }}
      />
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
