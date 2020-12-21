import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'white', width: '90%', marginBottom: '5%', borderRadius: 4, paddingTop: 12, paddingBottom: 12, alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;