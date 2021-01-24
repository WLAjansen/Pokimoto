import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView, onPress } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const AccountScreen = () => {
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
            <Text style={styles.renderHeaderText}>Account</Text>
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
          <Text style={styles.headerTitle}>Ed van dijk</Text>
          <Text style={styles.headerSubTitle}>Favorieten</Text>
        </View>
      );
    }

    function RenderHeaderContent() {
      return (
        <View style={styles.header}>

                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={()=>this.changeAdres()}>
                        <AntDesign style={styles.card} name="creditcard" size={44} color="#888888" />
                    </TouchableOpacity>   

                    <View style={styles.info}>
                        <Text style={styles.headline}>ABN AMRO BANK NV</Text>
                        <Text style={styles.detail}>NL86 ABNA 0473 2938 95</Text>
                    </View> 
                </View>

                <View style={styles.wrapper_1}>
                    <Feather style={styles.plus} name="plus" size={34} color="#404040" />
                    <Text style={styles.headline_1}>Add a payment Method</Text>
                </View>
            </View>
      );
    }
    function RenderSettings() {
      return (
        <Text style={styles.headerSemiTitle}>Settings</Text>
      )
    }

    function RenderBodyOptions() {
      return (

        <SafeAreaView style={styles.container}>
         {/* optie 1 */}
        <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>API settings</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>
         {/* optie 2 */}
         <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>Fees</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>
         {/* optie 3 */}
         <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>Limits</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>
         {/* optie 4 */}
         <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>Security</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>
         {/* optie 5 */}
         <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>Support</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>
         {/* optie 6 */}
         <View style={styles.wrapper_2}>
            <Text style={styles.headline_2}>Legal</Text>
            <AntDesign style={styles.right} name="right" size={20} color="grey" />
        </View>

        </SafeAreaView>
      );
    }

    function RenderFooter() {
      return (
        <TouchableOpacity onPress={()=>this.logOut()}>
          <Text style={styles.logout}>Sign Out</Text>
        </TouchableOpacity>   
      );
    }

    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
        <RenderHeaderBlock />
        <RenderHeaderTitle />
        <RenderHeaderContent />
        <RenderSettings />
        <RenderBodyOptions />
        <RenderFooter />
        </ScrollView>
      </SafeAreaView>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({

  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
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
    fontSize: 42,
    maxWidth: '70%',
  },
  headerSubTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    marginTop: 10,
    fontSize: 18,
    color: '#404040',
  },
  headerSemiTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    fontSize: 18,
    marginLeft: 12,
    color: '#404040',
  },
  wrapper: {
    height: 'auto',
    width: 'auto',
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 12,
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  wrapper_1: {
    marginLeft: 12,
    flexDirection: 'row',
    marginBottom: 40,
    backgroundColor: '#000000',
  },
  wrapper_2: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    width: '100%',
  },
  headline: {
    color: 'white',
    fontFamily: 'Sharp-Sans-Medium',
    paddingLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  headline_1: {
    color: 'white',
    fontFamily: 'Sharp-Sans-Medium',
    paddingLeft: 18,
    paddingTop: 6,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  headline_2: {
    color: 'white',
    fontFamily: 'Sharp-Sans-Medium',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 15,
    lineHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  detail: {
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
    paddingLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  info: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: 5,
    width: '90%',
    paddingBottom: 20,
  },
  card: {
    margin: 4,
    marginLeft: 0,
  },
  plus: {
    width: 53,
    marginLeft: 4,
  },
  right: {
    marginRight: 12,
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'flex-end',
  },
  logout: {
    backgroundColor: '#000000',
    color: '#FF6584',
    marginLeft: 29,
    marginTop: 0,
    marginBottom: 15,
    fontSize: 15,
  },


  });