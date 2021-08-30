import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';
import {SliderBox} from 'react-native-image-slider-box';
import Theme from '../utils/Theme';

const ProductComponent = ({off, onPress}) => {
  const image = [Images.productSlide1, Images.productSlide1];
  return (
    <View style={styles.main}>
      <SliderBox
        images={image}
        sliderBoxHeight={139}
        resizeMode="contain"
        ImageComponentStyle={{borderRadius: 10, marginTop: 10}}
        parentWidth={Theme.wp('25%')}
        dotColor={Theme.text}
        dotStyle={{width: 5, height: 5}}
      />
      <View style={styles.offView}>
        <Text style={{color: Theme.white}}>{off}</Text>
      </View>

      <View style={{width: Theme.wp('50%'), marginLeft: '10%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.debatic}>Diebetic Care</Text>
          <Text style={styles.stock}>In Stock</Text>
        </View>
        <Text style={styles.fit}>Fit Support</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Text style={styles.price}>₹1500</Text>
          <Text style={styles.priceLight}> ₹1000</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.profit}>Profit: </Text>
            <Text style={styles.profitPrice}>₹1500</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <TouchableOpacity style={styles.buBtn} onPress={onPress}>
            <Image source={Images.btnIcon} style={styles.buy} />
            <Text style={styles.buyText}>Buy</Text>
          </TouchableOpacity>
          <View style={styles.whatsappBtn}>
            <Image source={Images.whatsapp} style={styles.bu1} />
            <Text style={styles.whatsappText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Theme.white,
    flexDirection: 'row',
    padding: 10,
    marginTop: 7,
    borderRadius: 8,
  },
  debatic: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profit: {
    color: Theme.success,
    fontSize: 16,
  },
  profitPrice: {
    color: Theme.success,
    fontSize: 16,
    fontWeight: 'bold',
  },
  fit: {
    fontSize: 16,
    color: Theme.subText,
    marginTop: '3%',
  },
  stock: {
    color: Theme.success,
  },
  price: {
    fontSize: 16,
    color: Theme.black,
    fontWeight: 'bold',
  },
  priceLight: {
    color: Theme.subText,
    marginLeft: '1%',
    textDecorationLine: 'line-through',
  },
  bu1: {
    height: 20,
    width: 21,
  },
  whatsappBtn: {
    flexDirection: 'row',
    borderColor: Theme.primary,
    borderWidth: 1,
    width: Theme.wp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  buyText: {
    color: Theme.white,
    marginLeft: 10,
    fontSize: 16,
  },
  buy: {
    height: 18,

    width: 16,
  },
  whatsappText: {
    marginLeft: 10,
    color: Theme.primary,
    fontSize: 16,
  },
  buBtn: {
    width: Theme.wp('25%'),
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: Theme.primary,
  },
  offView: {
    backgroundColor: Theme.secondary,
    width: 60,
    height: 25,
    borderRadius: 4,
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
  },
});

export default ProductComponent;
