import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Theme from './../../utils/Theme';
import BackButtonHeader from './../../components/BackButtonHeader';
import commonStyle from './../../utils/applicationStyle';
import OrderDetailCard from '../../components/UI/OrderDetailCard';
import Images from './../../constants/Images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 21,
    backgroundColor: Theme.white,
  },
});

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <BackButtonHeader/>
      <View style={styles.innerContainer}>
        <Text style={commonStyle.titleBold}>Order Details</Text>
        <View style={{marginTop:11}}>
          <OrderDetailCard  image={Images.teaimg} />
        </View>
      </View>
    </View>
  );
};

export default OrderDetail;
