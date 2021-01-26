import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ReviewScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, body, rating, price, size, protein } = route.params;
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
          onPress={() => navigation.goBack()}
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

  const RenderBodyDropDown = () => {
    return (
      <View style={styles.dropdownSelect}>
        <RNPickerSelect
          style={customPickerStyles}
          onValueChange={(selectProtein) => setSelectProtein(selectProtein)}
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: 'Select your favourite protein', value: null }}
          items={[
            { label: 'JavaScript', value: 'JavaScript' },
            { label: 'TypeStript', value: 'TypeStript' },
            { label: 'Python', value: 'Python' },
            { label: 'Java', value: 'Java' },
            { label: 'C++', value: 'C++' },
            { label: 'C', value: 'C' },
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
        <Text style={styles.headerSubTitle}>{selectMixins}</Text>
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="first" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="second" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="third" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="fourth" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="fifth" />
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
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="first" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="second" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="third" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="fourth" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="fifth" />
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
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="first" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="second" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="third" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="Second item" value="fourth" />
        <RadioButton.Item labelStyle={styles.bodyDropDownLabel}  label="First item" value="fifth" />
        </RadioButton.Group>
      </View>
    );

  }
  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color='#ffffff' />;
  } else {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
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
      </SafeAreaView>
    );
  }
};

export default ReviewScreen;

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#343434',
    borderRadius: 8,
    color: '#888888',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#343434',
    borderRadius: 8,
    color: '#888888',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    margin: 12,
    borderColor: '#343434',
  },
  headerTitle: {
    color: '#C1C1C1',
    fontFamily: 'Sharp-Sans-Bold',
    fontSize: 42,
    maxWidth: '70%',
  },
  headerSubTitle: {
    fontFamily: 'Sharp-Sans-Medium',
    fontSize: 14,
    color: '#404040',
  },
  bodyDropDownLabel: {
    color: '#888888',
    fontSize: 14
  }
});
