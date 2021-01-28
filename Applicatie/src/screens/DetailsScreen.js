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
import { Ionicons, FontAwesome, AntDesign  } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ReviewScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, description, rating, price, size, protein } = route.params;
  // Dropdown
  const [selectProtein, setSelectProtein] = useState('');
  // Radio buttons
  const [selectMixins, setSelectMixins] = React.useState('');
  const [selectDressup, setSelectDressup] = React.useState('');
  const [selectToppings, setSelectToppings] = React.useState('');
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
          onPress={() => {
            navigation.navigate('RouteTabs');
          }}
        >
          <AntDesign name='left' resizeMode='contain' size={20} color='white' />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.renderHeaderText}>Poke editor</Text>
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
      <View style={styles.innerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={styles.headerSubTitle}>Protein</Text>
        <TouchableWithoutFeedback><View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', justifyContent: 'center', flexGrow: 1,}}>
        <Text style={{fontFamily: 'Sharp-Sans-Medium', color: '#404040',fontSize: 14, marginRight: 10 }}>{rating}</Text>
        <AntDesign name="star" size={20} color="#888888" /></View></TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  function RenderBodyDropDown () {
    return (
      <View style={styles.dropdownSelect}>
        <RNPickerSelect
          style={customPickerStyles}
          onValueChange={(selectProtein) => setSelectProtein(selectProtein)}
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: 'Select your favourite protein', value: null }}
          items={[
            { label: 'Extra Salmon', value: 'Extra Salmon' },
            { label: 'Extra Tuna', value: 'Extra Tuna' },
            { label: 'Extra Octopus', value: 'Extra Octopus' },
            { label: 'Extra Chicken', value: 'Extra Chicken' },
            { label: 'Extra Beef', value: 'Extra Beef' },
            { label: 'Extra Pork', value: 'Extra Pork ' },
          ]}
        />
      </View>
    );
  }
  
  function RenderHeaderTitleSecond() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headerSubTitle}>Mix-ins</Text>
      </View>
    );
  }

  function RenderBodyRadioGroupMixins() {
    return (
      <View style={styles.dropdownSelect}>
        <RadioButton.Group onValueChange={(selectMixins) => setSelectMixins(selectMixins)} value={selectMixins}>
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Cucumber" value="Cucumber" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Avocado" value="Avocado" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Mango" value="Mango" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Surimi" value="Surimi" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Takuan" value="Takuan" />
        </RadioButton.Group>
      </View>
    );
  }

  function RenderHeaderTitleThird() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headerSubTitle}>Dress-up</Text>
      </View>
    );
  }

  function RenderBodyRadioGroupDressup() {
    return (
      <View style={styles.dropdownSelect}>
        <RadioButton.Group onValueChange={(selectDressup) => setSelectDressup(selectDressup)} value={selectDressup}>
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Steamed Edamame" value="Steamed Edamame" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Takoyaki Balls" value="Soy Beans" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Gyoza Dumplings" value="Gyoza Dumplings" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Yakitori Chicken" value="Yakitori Chicken" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Yakisoba Noodles" value="Yakisoba Noodles" />
        </RadioButton.Group>
      </View>
    );
  }

  function RenderHeaderTitleFourth() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headerSubTitle}>Toppings</Text>
      </View>
    );
  }

  function RenderBodyRadioGroupToppings() {
    return (
      <View style={styles.dropdownSelect}>
        <RadioButton.Group onValueChange={(selectToppings) => setSelectToppings(selectToppings)} value={selectToppings}>
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Soy Sauce" value="Soy Sauce" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Sriracha Mayonaise" value="Sriracha Mayonaise" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Wasabi Mayonaise" value="Wasabi Mayonaise" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Yuzu Citrus Sauce" value="Yuzu Citrus Sauce" />
        <RadioButton.Item uncheckedColor={"#353434"} labelStyle={styles.bodyDropDownLabel}  label="Teriyaki Sauce" value="Teriyaki Sauce" />
        </RadioButton.Group>
      </View>
    );
  }

    const RenderBodyModal = () => {
      const [modalVisible, setModalVisible] = useState(false);
      const [selectPayment, setSelectPayment] = React.useState('');
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            useNativeDriver={true} 
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={PaymentModal.centeredView}>
              <View style={PaymentModal.modalView}>
                <View style={PaymentModal.modalTextView}>
                <Text style={PaymentModal.modalTitleText}>{title}</Text>
                <View style={PaymentModal.dropdownSelectPayment}>
                <RNPickerSelect
                  style={{...customPickerStyles, borderColor: 'white'}}
                  onValueChange={(selectPayment) => setSelectPayment(selectPayment)}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{ label: 'Paypal', value: 'Paypal' }}
                  items={[
                    { label: 'Apple Pay', value: 'Apple Pay' },
                    { label: 'Google Pay', value: 'Google Pay' },
                    { label: 'Samsung Pay', value: 'Samsung Pay' },
                  ]}
                />
                 <View style={{flex: 0.2, justifyContent:'center', alignItems: 'center'}}>
                 <FontAwesome name="cc-paypal" size={24} color="white" />
                </View>
              </View>
                <View style={PaymentModal.modalSubTextView}>
                <View style={PaymentModal.modalDetailsTextView}>
                </View>
                {/* Size */}
                <View style={PaymentModal.modalDetailsTextView}>
                <Text style={PaymentModal.modalText}>Size</Text>
                <Text style={{ color: '#C1C1C1', marginBottom: 12, marginTop: 12, 
                fontFamily: 'Sharp-Sans-Medium', fontSize: 15,}}>{size}</Text>
                </View>
                {/* Protein */}
                <View style={PaymentModal.modalDetailsTextView}>
                <Text style={PaymentModal.modalText}>Protein</Text>
                <Text style={{ color: '#C1C1C1', marginBottom: 12, marginTop: 12, 
                fontFamily: 'Sharp-Sans-Medium', fontSize: 15,}}>{protein}</Text>
                </View>
                {/* Price */}
                <View style={PaymentModal.modalDetailsTextView}>
                <Text style={PaymentModal.modalText}>Price</Text>
                <Text style={{ color: '#C1C1C1', marginBottom: 12, marginTop: 12, 
                fontFamily: 'Sharp-Sans-Medium', fontSize: 15,}}>€ {price}</Text>
                </View>
                </View>
                <Text style={PaymentModal.modalSubTitleText}>Your extra's</Text>
                <View style={PaymentModal.modalSubTextView}>
                <Text style={PaymentModal.modalText}>{selectProtein}</Text>
                <Text style={PaymentModal.modalText}>{selectMixins}</Text>
                <Text style={PaymentModal.modalText}>{selectToppings}</Text>
                <Text style={PaymentModal.modalText}>{selectDressup}</Text>
                </View>
                </View>
                <View style={PaymentModal.modalButtonView}>
                <TouchableHighlight
                  style={{ ...PaymentModal.openButton, backgroundColor: "white" }}
                  onPress={() => navigation.navigate('OrderComplete')}
                >
                  <Text style={{color: 'black', fontWeight: "bold"}}>Complete order</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...PaymentModal.openButton, backgroundColor: "#232323" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={{color: '#727272', fontWeight: "bold"}}>Close Summary</Text>
                </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableHighlight
            style={PaymentModal.openButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Sharp-Sans-Bold', textAlign: 'center'}}>Finish editing | </Text>
            <Text style={{fontFamily: 'Sharp-Sans-Bold', textAlign: 'center'}}> ${price}</Text>
            </View>
          </TouchableHighlight>
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
        <RenderBodyDropDown />
        <RenderHeaderTitleSecond />
        <RenderBodyRadioGroupMixins />
        <RenderHeaderTitleThird />
        <RenderBodyRadioGroupDressup />
        <RenderHeaderTitleFourth />
        <RenderBodyRadioGroupToppings />
        </ScrollView>
        <RenderBodyModal />
      </SafeAreaView>
    );
  }
};

export default ReviewScreen;

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
    borderRadius: 8,
    color: '#888888',
    fontFamily: 'Sharp-Sans-Medium',
    // to ensure the text is never behind the icon
  },
  iconContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black',
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
  dropdownSelect: {
    borderRadius: 12,
    margin: 12,
    backgroundColor: '#181818',
  },
  headerTitle: {
    color: '#C1C1C1',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'left'
  },
  headerDescription: {
    color: '#404040',
    width: '80%',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 13,
    textAlign: 'left'
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: '100%',
    width: '100%',
    margin: 20,
    justifyContent: 'space-between',
    backgroundColor: "#181818",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },
  openButton: {
    fontSize: 14,
    backgroundColor: 'white',
    marginRight: 12,
    marginLeft: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
    color: '#888888',
    elevation: 2
  },
  modalButtonView: {
    flexDirection: 'row',
  },
  modalSubTextView: {
    backgroundColor: '#242424',
    padding: 15,
    borderRadius: 12,
  },
  modalDetailsTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitleText: {
    marginBottom: 15,
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 30,
    textAlign: "center",
    color: 'white'
  },
  modalSubTitleText: {
    fontFamily: 'Sharp-Sans-Bold',
    color: '#C1C1C1',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  modalText: {
    marginBottom: 12,
    marginTop: 12,
    fontFamily: 'Sharp-Sans-Medium',
    fontSize: 15,
    color: '#888888',
  },
  dropdownSelectPayment: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderColor: '#242424',
    borderWidth: 1,
  },
  dropdownSelectIcon: {
    position: 'absolute',
    right: 0,
    bottom: 20,
  },
});
