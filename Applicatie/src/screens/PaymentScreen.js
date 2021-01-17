
import { View, Text, Image, StyleSheet, auto, wrap,row, TouchableOpacity, ActivityIndicator, SafeAreaView, onPress } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Payment = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
    
       

        <View style={styles.wrapper_1} >
          <TouchableOpacity>
             <Image style={styles.foto_5} source={require('../assets/chevron_left.png')}></Image>
          </TouchableOpacity>
             <Text style={styles.text}>Afrekenen</Text>
          </View>
        <Text style={styles.bedrag}>Het bedrag is $18 </Text>

        <SafeAreaView style={styles.container}>
          {/* 1 */}
          <View style={styles.wrapper}>
                <View style={styles.item}>
                  <Text style={styles.headline}>Jouw uitgekozen poke bowl</Text>
                  <Text style={styles.details}>Honolulu</Text>
                </View>    

                <View style={styles.item_1}>
                  <TouchableOpacity  onPress={() => { navigation.navigate('Tracking')}}>
                  <MaterialCommunityIcons style={styles.foto} name="exit-to-app" size={54} color="#54FA9C" />
                  </TouchableOpacity>
                </View>
          </View>
           {/* 2 */}
           <View style={styles.wrapper}>
                <View style={styles.item_2}>
                  <Text style={styles.headline}>Prijs</Text>
                  <Text style={styles.details}>$17.97</Text>
                </View>    

                <View style={styles.item_2}>
                  <Text style={styles.headline}>Grootte</Text>
                  <Text style={styles.details}>Medium</Text>
                </View> 

                <View style={styles.item_2}>
                  <Text style={styles.headline}>Toppings</Text>
                  <Text style={styles.details}>5 Stuks</Text>
                </View> 
          </View>
           {/* 3 */}
           <View style={styles.wrapper}>
                <TouchableOpacity>
                <FontAwesome5 style={styles.foto_1} name="location-arrow" size={24} color="#54FA9C" />
                </TouchableOpacity>  

                <View style={styles.item_3}>
                  <Text style={styles.headline_solo}>Contactweg 36, 1014 AN</Text>
                </View> 

                <TouchableOpacity onPress={() => { navigation.navigate('Tracking')}}>
                <AntDesign style={styles.foto_2} name="right" size={24} color="grey" />
                </TouchableOpacity>
          </View>
          {/* 4 */}
          <View style={styles.wrapper_2}>
                <TouchableOpacity onPress={()=>this.changeAdres()}>
                <AntDesign style={styles.foto_3} name="creditcard" size={44} color="#54FA9C" />
                </TouchableOpacity>   

                <View style={styles.item_4}>
                  <Text style={styles.headlines}>Ideal</Text>
                  <Text style={styles.detailss}>ABN AMRO</Text>
                </View> 

                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.foto_4} name="pencil" size={34} color="grey" />
                </TouchableOpacity>  
          </View>
        </SafeAreaView>

          <Footer
          name="exit-to-app" size={34} color="black"
            backgroundColor="#000000"
            rightButtonLabel="Afrekenen"
            rightButtonPress={() => {
              navigation.navigate('Account');
            }}
          />
        </View>

    )
}

export default Payment;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 60,
      backgroundColor: '#000000',
    },
  wrapper: {
    width: '95%',
    height: '20%',
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1.5 ,
    borderRadius: 8,
    borderColor: '#343434',
  },
  wrapper_1: {
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  wrapper_2: {
    width: '95%',
    height: '20%',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#181818',
  },
  foto: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    margin: 15,
  },
  foto_1: {
    height: 25,
    width: 24,
    margin: 35,
    marginLeft: 25,
  },
  foto_2: {
    height: 25,
    width: 24,
    margin: 35,
    marginLeft: 35,
    alignSelf: 'flex-end',
  },
  foto_3: {
    margin: 27,
    marginLeft: 25,
    marginRight: 0,
  },
  foto_4: {
    margin: 35,
    marginLeft: 55,
    alignSelf: 'flex-end',
  },
 
    bedrag: {
      color: '#808080',
      backgroundColor: '#000000',
      fontSize: 24,
      paddingLeft: 29,
      paddingTop: 42,
    },
    text: {
      fontSize: 28,
      paddingLeft: 35,
      paddingRight: 35,
      paddingTop: 40,
      paddingBottom: 10,
      color: 'white',
      fontFamily: 'Sharp-Sans-Bold',
      backgroundColor: '#000000',
    },
    item: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      margin: 5,
      height: 90,
      width: '65%',
    },
    item_1: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-end',
      margin: 5,
      height: 90,
      width: '30%',
    },
    headline: {
      color: '#888888',
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 5,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 15,
    },
    headline_solo: {
      color: '#888888',
      paddingTop: 33,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 18,
    },
    details: {
      color: 'white',
      paddingBottom: 20,
      paddingLeft: 20,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 16,
    },
  
    item_2: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      margin: 5,
      height: 90,
      width: '32%',
    },
    item_4: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      margin: 5,
      height: 90,
      width: '50%',
    },
    headlines: {
      color: 'white',
      paddingTop: 20,
      paddingLeft: 20,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 16,
    },
    detailss: {
      color: '#888888',
      paddingBottom: 20,
      paddingLeft: 20,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 16,
    },
    rechts: {
      width: '15%',
      alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    },
  });
