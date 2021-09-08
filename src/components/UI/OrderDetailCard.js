import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Images from './../../constants/Images';
import commonStyle from './../../utils/applicationStyle';
import Theme from './../../utils/Theme';

const styles = StyleSheet.create({
  cardContainer: {
    height: 153,
    flexDirection: 'row',
  },
  detailView: {
    marginTop: Theme.hp('1%'),
    marginLeft: '2.5%',
    width: 223,
  },
  image: {
    width: 118,
    height: 123,
  },
});

const OrderDetailCard = ({image}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailView}>
        <Text style={[commonStyle.titleBold]}>
          Namaste Chai Instant Tea Premixes (Lemongrass)
        </Text>
        <Text
          style={[
            commonStyle.normalText,
            {color: Theme.subText, marginTop: Theme.hp('0.5%')},
          ]}>
          Namaste
        </Text>
        <View style={{flexDirection: 'row', marginTop: Theme.hp('0.5%')}}>
          <Text style={commonStyle.titleBold}>₹160</Text>
          <Text
            style={[
              commonStyle.normalText,
              {color: Theme.subText, marginLeft: Theme.hp('1%')},
            ]}>
            ₹200
          </Text>
          <Text style={[commonStyle.normalText, {color: Theme.text, marginLeft: Theme.hp('9%')}]}>Qty : 1</Text>

        </View>
        <View style={{paddingTop:Theme.hp('2%')}}>
            <Text style={commonStyle.normalText}>Order ID : <Text style={commonStyle.titleBold}> AS23DXCF4</Text> </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailCard;
