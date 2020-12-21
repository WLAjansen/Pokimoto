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
            image={require('../assets/header1.png')}
            title="Maak jouw eigen poke"
            paragraph="Breng jouw vrienden en familie samen
            met onze vers gemaakte poke bowls
            allemaal binnen handbereik."
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
            image={require('../assets/header4.png')}
            title="Algemene voorwaarden"
            iconName="escalator-warning"
            paragraph="Pokimoto collects usage data to improve Pokimoto app. Your searches, browsing, purchases and device trust 
            score may be used to personalize your experience and prevent fraud. See how your data is managed."
          />
          <Footer
            backgroundColor="#000000"
            
            // leftButtonLabel="Back"
            // leftButtonPress={() => {
            //   handlePageChange(0);
            // }}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;