import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const RoundedButton = ({ label, onPress }) => {
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color='#ffffff' />;
  } else {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'white', width: '90%', marginBottom: '5%', borderRadius: 6, paddingTop: 12, paddingBottom: 12, alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, color: 'black', fontFamily: 'Sharp-Sans-Bold' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
 }
};

export default RoundedButton;