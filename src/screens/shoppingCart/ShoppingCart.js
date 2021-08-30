import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import SimpleHeader from '../../components/SimpleHeader';
import CartItem from '../../components/UI/CartItem';
import OrderButton from '../../components/UI/OrderButton';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Header2 from './../../components/Header2';
import SummaryCard from './../../components/UI/SummaryCard';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.accent,
  },
  main1: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  minusView: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopping: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '59%',
    marginTop: Theme.hp('4%'),
    alignSelf: 'center',
  },
  titleView: {
    flexDirection: 'row',
    width: '60%',
    marginLeft: Theme.wp('10%'),
    justifyContent: 'space-between',
  },
  bu1: {
    height: 21,
    width: 21,
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
  whatsappText: {
    marginLeft: 5,
    color: Theme.subText,
    fontSize: 16,
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
    borderColor: Theme.border,
    borderWidth: 1,
    width: Theme.wp('27.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  mainBorder: {
    flexDirection: 'row',
    marginLeft: Theme.wp('8%'),
    borderWidth: 1,
    borderColor: Theme.border,
    height: 25,
    alignItems: 'center',
    borderRadius: 4,
    width: 80,
  },
  plusView: {
    width: 26,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: Theme.border,
  },
  debatic: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fit: {
    fontSize: 14,
    color: Theme.subText,
  },
  pImage: {
    height: 70,
    width: 59,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paddingView: {
    padding: 15,
    backgroundColor: Theme.white,
  },
  pView: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: Theme.white,
  },

  paddingView1: {
    padding: 8,
    marginHorizontal: 16,
    // backgroundColor: Theme.white,
  },
  myShopping: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pmainView: {
    // paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
  whatsappBtn: {
    flexDirection: 'row',
    width: Theme.wp('27.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 4,
  },
  bu1: {
    height: 21,
    width: 21,
    alignSelf: 'center',
  },
  easyStepContainer: {
    backgroundColor: Theme.white,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  innerStepContainer: {
    backgroundColor: Theme.cardBackground,
    padding: 12,
    borderRadius: 4,
  },
  easytext: {
    fontFamily: Theme.fontFamilyPrimary,
    fontWeight: '400',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 19.2,
    fontStyle: 'normal',
    color: Theme.black,
    marginVertical: 3,
  },
  easytextTitle: {
    fontFamily: Theme.fontFamilyBold,
    fontWeight: '700',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 19.2,
    fontStyle: 'normal',
    color: Theme.black,
  },
  applyCoupn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.white,
    height: 60,
    marginTop: 4,
    paddingHorizontal: 12,
  },
  select: {
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.2,
    color: Theme.primary,
    fontFamily: Theme.fontFamilyPrimary,
  },
  addressView2: {
    paddingHorizontal: 16,
    backgroundColor: Theme.white,
    paddingVertical: 24,
    marginTop: 4,
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
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 4,
    backgroundColor: Theme.white,
    // paddingVertical: 16,
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

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '1',
    };
  }

  render() {
    const data = [
      {
        id: '1',
        name: 'Deabetic Care',
        price: '₹500',
        image: Images.product3,
      },
    ];
    return (
      <View style={styles.main}>
        <Header2 goback />
        {this.state.items.length == 0 ? (
          <View style={styles.main1}>
            <Image
              source={Images.cartImage}
              style={{
                height: 170,
                width: 250,
                alignSelf: 'center',
                marginTop: Theme.hp('20%'),
              }}
            />
            <Text style={styles.shopping}>Your shopping cart is empty !!</Text>
            <View
              style={{
                width: '45%',
                alignSelf: 'center',
                marginTop: Theme.hp('3%'),
              }}>
              <Button text="Browse products" />
            </View>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.paddingView}>
              <View style={styles.cart}>
                <Text style={styles.myShopping}>My Shopping Cart (2)</Text>
                <Text style={styles.myShopping}>Total : ₹1000</Text>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.paddingView1}>
                <FlatList
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <View style={{marginTop: Theme.hp('0%')}}>
                      <CartItem {...item} />
                    </View>
                  )}
                />
              </View>
              {/* easy step */}
              <View style={styles.easyStepContainer}>
                <View style={styles.innerStepContainer}>
                  <Text style={styles.easytextTitle}>
                    Get this product in easy steps :
                  </Text>
                  <View style={{marginHorizontal: 6, marginTop: 3}}>
                    <Text style={styles.easytext}>
                      1. Complete the payment.
                    </Text>
                    <Text style={styles.easytext}>
                      2. Invite your friends to buy by sharing the link
                    </Text>
                    <Text style={styles.para}>
                      Once your 2 friends buy through the link , your item will
                      be delivered you to all if you by{' '}
                      <Text style={[styles.para, {fontWeight: 'bold'}]}>
                        12 July , 2021 .
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
              {/* apply coupen start */}
              <View style={styles.applyCoupn}>
                <Text style={[styles.easytextTitle, {color: Theme.text}]}>
                  Apply Coupons
                </Text>
                <TouchableOpacity>
                  <Text style={styles.select}>Select</Text>
                </TouchableOpacity>
              </View>
              <SummaryCard
                mrpPrice={'₹1000'}
                discount={'₹500'}
                shippingFee={'FREE'}
                wallet={'₹0'}
                productQuantity={'2'}
              />
            </ScrollView>
            <OrderButton title={'Proceed'} onPress={()=>this.props.navigation.navigate('OrderSummary')} />
          </View>
        )}
      </View>
    );
  }
}
