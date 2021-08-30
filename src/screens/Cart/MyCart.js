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
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '1',
    };
  }

  render() {
    const data = [
      {
        id: '0',
        name: 'Deabetic Care',
        price: '₹500',
        image: Images.product3,
      },
      {
        id: '1',
        name: 'Deabetic Care',

        price: '₹500',
        image: Images.product3,
      },
      {
        id: '2',
        name: 'Deabetic Care',

        price: '₹500',
        image: Images.product3,
      },
      {
        id: '3',
        name: 'Deabetic Care',

        price: '₹500',
        image: Images.product3,
      },
    ];
    return (
      <View style={styles.main}>
        <SimpleHeader text="My Cart" source={Images.backArrow} />
        {this.state.items == '0' ? (
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
          <View>
            <View style={styles.paddingView}>
              <View style={styles.cart}>
                <Text style={styles.myShopping}>My Shopping Cart (4)</Text>
                <Text style={styles.myShopping}>Total : ₹1000</Text>
              </View>
            </View>

            <ScrollView style={{marginBottom: 120}}>
              <View style={styles.paddingView1}>
                <View style={styles.pView}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Images.product3} style={styles.pImage} />
                    <View style={styles.titleView}>
                      <View>
                        <Text style={styles.debatic}> Diabetic Care</Text>
                        <Text style={styles.fit}>Fit Support</Text>
                        <Text style={styles.price}>₹500</Text>
                      </View>
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
                          <Image
                            source={Images.minus}
                            style={{height: 2, width: 11}}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-end',
                    }}>
                    <TouchableOpacity style={styles.buBtn}>
                      <Image source={Images.btnIcon} style={styles.buy} />
                      <Text style={styles.buyText}>Buy</Text>
                    </TouchableOpacity>
                    <View style={styles.whatsappBtn}>
                      <Image source={Images.trash} style={styles.bu1} />
                      <Text style={styles.whatsappText}>Remove</Text>
                    </View>
                  </View>
                </View>
                <FlatList
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <View style={{marginTop: Theme.hp('2%')}}>
                      <View style={styles.pView}>
                        <View style={{flexDirection: 'row'}}>
                          <Image source={item.image} style={styles.pImage} />
                          <View style={styles.titleView}>
                            <View>
                              <Text style={styles.debatic}>{item.name}</Text>
                              <Text style={styles.fit}>Fit Support</Text>
                              <Text style={styles.price}>{item.price}</Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                          }}>
                          <TouchableOpacity style={styles.buBtn}>
                            <Image source={Images.btnIcon} style={styles.buy} />
                            <Text style={styles.buyText}>Buy</Text>
                          </TouchableOpacity>
                          <View style={styles.whatsappBtn}>
                            <Image source={Images.trash} style={styles.bu1} />
                            <Text style={styles.whatsappText}>Remove</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.background,
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
    marginLeft: 10,
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
    padding: 15,
    // backgroundColor: Theme.white,
  },
  myShopping: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
