import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

const Page = ({ backgroundColor, iconName, image, title, paragraph }) => {
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });
  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#ffffff" />;
  } else {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Text style={styles.innerHeader }>
          {title}
        </Text>
       <Image style={styles.innerImage} source={image} />
      <View style={styles.innerTextContainer}>
      <MaterialIcons name={iconName} size={30} color="#C1C1C1" />
        <Text style={styles.innerParagraph}>
          {paragraph}
        </Text>
      </View>
    </View>
  );
  }
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000000'
  },
  innerTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  innerHeader: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Sharp-Sans-Bold'
  },
  innerParagraph: {
    fontSize: 11,
    fontFamily: 'Sharp-Sans-Medium',
    marginTop: 16,
    maxWidth: '80%',
    textAlign: 'center',
    color: 'grey'
  },
  innerImage: {
    marginTop: '10%',
    width: 200,
    height: 200
  }
});