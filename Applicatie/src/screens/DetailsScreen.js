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

const ReviewScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, body, rating, price, size, protein } = route.params;
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

  function RenderHeaderTitleFirst() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubTitle}>Protein</Text>
      </View>
    );
  }

  function RenderBodyDropDown() {
    const [selectProtein, setSelectProtein] = useState('');
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
        <Text style={styles.headerSubTitle}>Protein</Text>
      </View>
    );
  }

  function RenderBodyRadioGroup() {
    const [value, setValue] = React.useState('first');
    return (
      <View style={styles.dropdownSelect}>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value} color={'white'}>
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
        <RenderHeaderBlock />
        <RenderHeaderTitleFirst />
        <RenderBodyDropDown />
        <RenderHeaderTitleSecond />
        <RenderBodyRadioGroup />
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
