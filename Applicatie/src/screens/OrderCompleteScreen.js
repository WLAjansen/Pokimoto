import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import Page from '../components/Page';
import Footer from '../components/Footer';

const OrderComplete = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key='1'>
          <Page
            backgroundColor='#000000'
            image={require('../assets/card-reader.png')}
            title='Order complete'
            paragraph="Your order is on it's way."
          />
          <Footer
            backgroundColor='#000000'
            rightButtonLabel='Track my order'
            rightButtonPress={() => {
              navigation.navigate('Tracking');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default OrderComplete;
