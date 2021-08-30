import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EventButton from '../../components/EventButton';
import Header2 from '../../components/Header2';
import OrderButton from '../../components/UI/OrderButton';
import Images from '../../constants/Images';
import Theme from './../../utils/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },

  addressView: {
    paddingVertical: 10,
    backgroundColor: Theme.white,
    paddingHorizontal: 16,
  },
  deliverToView: {
    marginTop: Theme.hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 10.67,
    height: 13.33,
    tintColor: Theme.text,
  },
  text: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16.8,
    color: Theme.text,
    marginVertical: Theme.hp('1%'),
  },
  title: {
    color: Theme.text,
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontWeight: '700',
    paddingVertical: 5,
  },
  button: {
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    paddingRight: 0,
    borderColor: Theme.subText,
    borderWidth: 1,
    width: 106,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  btnchng: {
    marginLeft: 15,
    width: 152,
    borderColor: Theme.primaryLight,
  },
  btnText: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19.2,
    color: Theme.subText,
  },
  pView: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: Theme.white,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  pImage: {
    height: 70,
    width: 59,
  },
  titleView: {
    flexDirection: 'row',
    width: '60%',
    marginLeft: Theme.wp('10%'),
    justifyContent: 'space-between',
  },
  debatic: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fit: {
    fontSize: 14,
    color: Theme.subText,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buBtn: {
    width: Theme.wp('27.5%'),
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: Theme.primary,
  },
  buy: {
    height: 18,

    width: 16,
  },
  buyText: {
    color: Theme.white,
    marginLeft: 10,
    fontSize: 16,
  },
  whatsappBtn: {
    flexDirection: 'row',
    width: Theme.wp('27.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  bu1: {
    height: 21,
    width: 21,
  },
  plusView: {
    width: 26,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: Theme.border,
  },
  minusView: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBorder: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.border,
    height: 25,
    alignItems: 'center',
    borderRadius: 4,
    width: 80,
    marginTop: 8,
  },
  whatsappText: {
    marginLeft: 10,
    color: Theme.subText,
    fontSize: 16,
  },
  pmainView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressView2: {
    paddingHorizontal: 16,
    backgroundColor: Theme.white,
    paddingVertical: 24,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  text1: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: Theme.text,
    lineHeight: 19.2,
  },
  text2: {
    fontWeight: '400',
    fontSize: 14,
  },
  marginAdded: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
    color: Theme.success,
    lineHeight: 15.2,
  },
  horizonline: {
    borderWidth: 0.5,
    borderColor: Theme.subText,
    marginVertical: 5,
  },
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 4,
    backgroundColor: Theme.white,
    paddingVertical: 16,
    justifyContent: 'space-between',
    height: 92,
    alignItems: 'center',
  },
  procsedbtn: {
    width: 120,
    height: 40,
    backgroundColor: Theme.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    marginLeft: 10,
  },
  Proprice: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '700',
    fontSize: 18,
    fontStyle: 'normal',
    color: Theme.secondary,
    lineHeight: 21.6,
  },
  textSummary: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '400',
    fontSize: 14,
    fontStyle: 'normal',
    color: Theme.subText,
    lineHeight: 18.6,
    textAlign: 'center',
  },
});

const OrderSummary = ({navigation}) => {
  function editAddress() {
    console.log('edit address');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header2 goback />
        <View style={styles.addressView}>
          <Text style={styles.title}>Customer’s Shipping Address</Text>
          <View style={styles.deliverToView}>
            <Image source={Images.location} styles={styles.image} />
            <Text style={[styles.text, {marginLeft: 4}]}>Deliver to: </Text>
            <Text style={[styles.text, {fontWeight: '500', marginLeft: 4}]}>
              Kentucky 39495
            </Text>
          </View>
          <Text style={styles.text}>4517 Washington Ave. </Text>
          <Text style={styles.text}>Manchester, </Text>
          <Text style={styles.text}>Kentucky</Text>
          <Text style={styles.text}>39495</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={1}
              onPress={() => editAddress()}>
              <Text style={styles.btnText}>{'Edit'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.btnchng]}
              activeOpacity={1}
              onPress={() => editAddress()}>
              <Text style={[styles.btnText, {color: Theme.primary}]}>
                {'Change address'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.product3} style={styles.pImage} />
            <View style={styles.titleView}>
              <View>
                <Text style={styles.debatic}> Diabetic Care</Text>
                <Text style={styles.fit}>Fit Support</Text>
                <Text style={styles.price}>₹500</Text>
              </View>
            </View>
          </View>
          <View style={styles.pmainView}>
            <View style={styles.mainBorder}>
              <View style={styles.plusView}>
                <Image
                  source={Images.plus}
                  style={{
                    height: 11,
                    width: 11,
                  }}
                />
              </View>
              <View style={styles.plusView}>
                <Text>1</Text>
              </View>
              <View style={styles.minusView}>
                <Image source={Images.minus} style={{height: 2, width: 11}} />
              </View>
            </View>
            <View style={styles.whatsappBtn}>
              <Image source={Images.trash} style={styles.bu1} />
              <Text style={styles.whatsappText}>Remove</Text>
            </View>
          </View>
        </View>
        {/* address view */}
        <View style={styles.addressView2}>
          <Text style={styles.text1}>Order Summary</Text>
          <View style={styles.textView}>
            <Text style={[styles.text1, styles.text2]}>MRP</Text>
            <Text style={[styles.text1, styles.text2]}>₹1000</Text>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.text1, styles.text2]}>Discount</Text>
            <Text style={[styles.text1, styles.text2]}>₹500</Text>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.text1, styles.text2]}>Shipping charges</Text>
            <Text style={[styles.text1, styles.text2]}>FREE</Text>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.text1, styles.text2]}>Wallet</Text>
            <Text style={[styles.text1, styles.text2]}>₹0</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.marginAdded}>Margin Added</Text>
            <Text style={styles.marginAdded}>₹1000</Text>
          </View>
          <View style={styles.horizonline} />
          <View>
            <View style={styles.textView}>
              <Text style={[styles.text1, styles.text2, {fontWeight: '500'}]}>
                Total Selling Price
              </Text>
              <Text style={[styles.text1, {color: Theme.primary}]}>₹500</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* process view */}
      <OrderButton title={'Proceed'} onPress={()=>navigation.navigate('PlaceOrderScreen')} />

    </View>
  );
};

export default OrderSummary;
