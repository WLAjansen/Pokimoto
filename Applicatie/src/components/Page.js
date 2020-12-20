import React from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const Page = ({ backgroundColor, iconName, title, paragraph }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Icon name={iconName} size={172} color="white" />
      <View style={{ marginTop: 16, }}>
        <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, marginTop: 16, fontWeight: 'bold', textAlign: 'center', color: 'grey' }}>
          {paragraph}
        </Text>
      </View>
    </View>
  );
};

export default Page;