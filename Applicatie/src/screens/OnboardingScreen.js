import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import Page from '../components/Page';
import Footer from '../components/Footer';

const Onboarding = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };


  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#000000"
            image={require('../assets/ipad.png')}
            title="Make your own bowl"
            paragraph="Bring your friends and family together
            with our freshly made poke bowls
            all at your fingertips."
          />
          <Footer
            backgroundColor="#000000"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#000000"
            image={require('../assets/processor.png')}
            title="Terms and services"
            iconName="escalator-warning"
            paragraph="Pokimoto collects usage data to improve the app. Your searches and purchases on your device
            can be used to enhance your personal
            experience and prevent fraud. See how your data is managed"
          />
          <Footer
            backgroundColor="#000000"
            
            // leftButtonLabel="Back"
            // leftButtonPress={() => {
            //   handlePageChange(0);
            // }}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate('OrderComplete');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;