import { View, Text, Image, StyleSheet, auto, wrap,row, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView, onPress } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const PaymentScreen = () => {
    const navigation = useNavigation();

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
            <Text style={styles.renderHeaderText}>Payment</Text>
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

    function RenderHeaderTitle() {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.headerTitle}>Afrekenen</Text>
          <Text style={styles.headerSemiTitle}>Het bedrag is <Text  style={styles.amount}>$18</Text> </Text>
        </View>
      );
    }

    function RenderBodyContentWrapper_1() {
      return (
        <View style={styles.wrapper}>
          <View style={styles.description}>
            <Text style={styles.descriptionHeadline}>Jouw uitgekozen poke bowl</Text>
            <Text style={styles.descriptionDetails}>Honolulu</Text>
          </View>    

          <View style={styles.vectorWrapper}>
            <TouchableOpacity  onPress={() => { navigation.navigate('Tracking')}}>
            <MaterialCommunityIcons style={styles.vectorExit} name="exit-to-app" size={45} color="#54FA9C" />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    function RenderBodyContentWrapper_2() {
      return (
        <View style={styles.wrapper_2}>
          <View>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Medium', fontSize: 16, paddingBottom: 10, textAlign: 'center'}}>Totaal</Text>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Regular', textAlign: 'center'}}>$17.97</Text>
          </View>    

          <View>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Medium', fontSize: 16, paddingBottom: 10, textAlign: 'center'}}>Grootte</Text>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Regular', textAlign: 'center'}}>Medium</Text>
          </View> 

          <View>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Medium', fontSize: 16, paddingBottom: 10, textAlign: 'center'}}>Toppings</Text>
            <Text style={{color: 'white', fontFamily: 'Sharp-Sans-Regular', textAlign: 'center'}}>5 Stuks</Text>
          </View> 
       </View>
      );
    }

    function RenderBodyContentWrapper_3() {
      return (
        <View style={styles.wrapper}>
                <TouchableOpacity style={styles.vectorWrapper}>
                <FontAwesome5 style={styles.vectorLocation} name="location-arrow" size={24} color="#54FA9C" />
                </TouchableOpacity>  

                <View style={styles.adresWrapper}>
                  <Text style={styles.headline_solo}>Contactweg 36, 1014 AN</Text>
                </View> 

                <TouchableOpacity style={styles.vectorWrapper} onPress={() => { navigation.navigate('Tracking')}}>
                <AntDesign style={styles.vectorArrow} name="right" size={24} color="grey" />
                </TouchableOpacity>
          </View>
      );
    }

    function RenderBodyContentWrapper_4() {
      return (
        <View style={styles.wrapper_2}>
                <TouchableOpacity style={styles.vectorWrapper} onPress={()=>this.changeAdres()}>
                 <AntDesign style={styles.cardVector} name="creditcard" size={44} color="#54FA9C" />
                </TouchableOpacity>   

                <View style={styles.paymentDetails}>
                  <Text style={styles.paymentMethod}>Ideal</Text>
                  <Text style={styles.paymentBank}>ABN AMRO</Text>
                </View> 

                <TouchableOpacity style={styles.vectorWrapper}>
                 <MaterialCommunityIcons style={styles.editVector} name="pencil" size={34} color="grey" />
                </TouchableOpacity>  
          </View>
      );
    }

    function RenderFooter() {
      return (
        <Footer
          name="exit-to-app" size={34} color="black"
            backgroundColor="#000000"
            rightButtonLabel="Afrekenen"
            rightButtonPress={() => {
              navigation.navigate('Account');
            }}
          />
      );
    }

    return (
        <SafeAreaView style={styles.droidSafeArea}>
          <ScrollView>
          <RenderHeaderBlock />
          <RenderHeaderTitle />
          <RenderBodyContentWrapper_1 />
          <RenderBodyContentWrapper_2 />
          <RenderBodyContentWrapper_3 />
          <RenderBodyContentWrapper_4 />
          <RenderFooter />
          </ScrollView>
        </SafeAreaView>
    )
}

export default PaymentScreen;

const styles = StyleSheet.create({
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      backgroundColor: 'black',
    },
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 60,
      backgroundColor: '#000000',
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
    headerTitle: {
      color: '#C1C1C1',
      fontFamily: 'Sharp-Sans-Bold',
      fontSize: 32,
      maxWidth: '70%',
    },
    headerSubTitle: {
      fontFamily: 'Sharp-Sans-Medium',
      fontSize: 14,
      color: '#404040',
    },
    headerSemiTitle: {
      fontFamily: 'Sharp-Sans-Medium',
      fontSize: 20,
      margin: 10,
      marginLeft: 0,
      marginBottom: '10%',
      color: '#404040',
    },
    wrapper: {
      margin: 12,
      flexDirection: 'row',
      borderWidth: 1.5,
      borderRadius: 8,
      borderColor: '#343434',
    },
    description: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      width: '70%',
    },
    descriptionHeadline: {
      color: '#888888',
      marginTop: 20,
      marginLeft: 20,
      marginBottom: 5,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 15,
    },
    descriptionDetails: {
      color: 'white',
      marginBottom: 20,
      marginLeft: 20,
      fontFamily: 'Sharp-Sans-Medium',
      alignSelf: 'flex-start',
      fontSize: 16,
    },
    vectorWrapper: {
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    vectorExit: {
      alignSelf: 'flex-end',
      margin: 'auto',
    },
    orderDescription: {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      margin: 3,
      height: 90,
      width: '33%',
    },
    vectorLocation: {
      margin: 35,
    },
    vectorArrow: {
      marginRight: 35,
      marginTop: 'auto',
      marginBottom: 'auto',
      alignSelf: 'flex-end',
    },
   adresWrapper: {
     marginTop: 'auto',
     marginBottom: 'auto',
      width: '53%',
   },
   headline_solo: {
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
    alignSelf: 'flex-start',
    fontSize: 18,
},
   wrapper_2: {
    justifyContent: 'space-around',
    margin: 12,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#343434',
  },
  cardVector: {
    margin: 27,
    marginRight: 0,
    marginTop: 'auto',
     marginBottom: 'auto',
  },
  paymentDetails: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 'auto',
     marginBottom: 'auto',
    width: '50%',
  },
  paymentMethod: {
    color: 'white',
    fontFamily: 'Sharp-Sans-Medium',
    alignSelf: 'flex-start',
    fontSize: 16,
  },
  paymentBank: {
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
    alignSelf: 'flex-start',
    fontSize: 16,
  },
  editVector: {
    margin: 35,
    alignSelf: 'flex-end',
  },
  amount: {
    color: '#54FA9C',
  }

});