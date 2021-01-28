import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Modal,
  ActivityIndicator,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import { RadioButton } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const RestaurantsDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, body, rating, price, size, protein, description,location , uri } = route.params;
  // Dropdown
  // Radio buttons

  // Fonts import
  let [fontsLoaded] = useFonts({
    'Sharp-Sans-Regular': require('../assets/fonts/samsungsharpsans.otf'),
    'Sharp-Sans-Medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'Sharp-Sans-Bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
  });

  function RenderHeaderBlock() {
    return (
      <SafeAreaView style={styles.renderHeaderBack}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='left' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.renderHeaderText}>Restaurants</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('Dishes');
          }}
        >
          <AntDesign
            name='search1'
            resizeMode='contain'
            size={20}
            color='white'
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  function RenderHeaderTitleFirst(props) {
    return (
      <View style={styles.item}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Image
        source={{
          uri: uri
        }}
        style={styles.itemPhoto}
        resizeMode='cover'
      />
       
        <TouchableWithoutFeedback><View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', justifyContent: 'center', flexGrow: 1,}}>
        <Text style={{fontFamily: 'Sharp-Sans-Medium', color: '#404040',fontSize: 14, marginRight: 10 }}>{rating}</Text>
        <AntDesign name="star" size={20} color="#888888" /></View></TouchableWithoutFeedback>
        </View>
      </View>
    );
  }


  


  function RenderHeaderTitleThird() {
    return (
      <View style={styles.innerContainer}>
         <Text style={styles.headerSubTitleL}>{location}</Text>
      </View>
    );
  }



  function RenderHeaderTitleFourth() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headerSubTitle}>{description}</Text>
      </View>
      
    );
  }


  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color='#ffffff' />;
  } else {
    return (
      <SafeAreaView stickyHeaderIndices={[1]} style={styles.droidSafeArea}>
        <StatusBar style='light' />
        <ScrollView>
        <RenderHeaderBlock />
        <RenderHeaderTitleFirst />
        <RenderHeaderTitleThird />
        <RenderHeaderTitleFourth />
        </ScrollView>
      </SafeAreaView>
      
    );
  }
};

export default RestaurantsDetailScreen;

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 13,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#888888',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 13,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black',
  },
  item: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 20
  },
  innerItem: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#181818',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  innerContainer: {
    marginRight: 12,
    marginLeft: 12,
  },
  renderHeaderBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: -8,
    paddingBottom: 10,
  },
  renderHeaderText: {
    height: 40,
    color: 'white',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 16,
    lineHeight: 37,
    paddingRight: 50,
    borderRadius: 6,
    paddingLeft: 50,
    marginLeft: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemPhoto: {
    width: '100%',
    height: 350,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  dropdownSelect: {
    borderRadius: 12,
    margin: 12,
    backgroundColor: '#181818',
  },
  headerTitle: {
    color: '#C1C1C1',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 32,
    textAlign: 'left'
  },
  headerSubTitleL: {
    fontFamily: 'Sharp-Sans-Medium',
    fontSize: 15,
    color: '#404040',
    marginBottom: 3
  },
  headerSubTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    fontSize: 13,
    color: '#404040',
  },
  bodyDropDownLabel: {
    fontSize: 13,
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
  },
  completeButton: {
    backgroundColor: 'white', 
    margin: 12,
    marginBottom: '5%', 
    borderRadius: 6, 
    paddingTop: 12, 
    paddingBottom: 12, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});

const PaymentModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: '100%',
    width: '100%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },
  openButton: {
    fontSize: 14,
    backgroundColor: '#C1C1C1',
    margin: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
    color: '#888888',
    paddingRight: 30,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
