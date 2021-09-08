import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Header from '../../components/MainHeader';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {SliderBox} from 'react-native-image-slider-box';

export default class GroupBuyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images2: [Images.product2, Images.product2],
      images: [
        require('../../assets/Images/image1.png'),
        require('../../assets/Images/image1.png'),
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.whiteView}>
            <Image
              source={Images.groupImage}
              style={styles.mainImage}
              resizeMode="contain"
            />
            <Text style={styles.label}>Deals of the Day</Text>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.whiteView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: Theme.secondary,
                    width: 60,
                    height: 30,
                    borderRadius: 4,
                    padding: 5,
                  }}>
                  <Text style={{color: Theme.white}}>33% off</Text>
                </View>
                <SliderBox
                  images={this.state.images2}
                  sliderBoxHeight={200}
                  resizeMode="cover"
                  ImageComponentStyle={{borderRadius: 10}}
                  parentWidth={Theme.wp('34%')}
                  dotColor={Theme.text}
                />
                <Image source={Images.share} style={styles.share} />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.price}>₹1500</Text>
                  <Text style={styles.priceLight}> ₹1000</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.profit}>Minimum members required : </Text>
                  <Text style={styles.profitPrice}>3 </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  marginTop: '10%',
                }}>
                <View style={styles.whatsappBtn1}>
                  <Image source={Images.blueTrolly} style={styles.bu1} />
                  <Text style={styles.whatsappText}>Add to Cart</Text>
                </View>
                <View style={styles.buBtn}>
                  <Image source={Images.usersWhite} style={styles.buy} />
                  <Text style={styles.buyText1}>Group Buy</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.whiteView}>
            <View style={styles.iconRow}>
              <View>
                <Image source={Images.cat1} style={styles.catImages} />
                <Text style={styles.title}>Beauty</Text>
              </View>
              <View>
                <Image source={Images.cat3} style={styles.catImages} />
                <Text style={styles.title}>Personal</Text>
              </View>
              <View>
                <Image source={Images.cat2} style={styles.catImages} />
                <Text style={styles.title}>HelthCare</Text>
              </View>
              <View>
                <Image source={Images.cat3} style={styles.catImages} />
                <Text style={styles.title}>Nutritional</Text>
              </View>
            </View>
            <View style={styles.catView}>
              <Text style={styles.label}>BEX CHOICE</Text>
            </View>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.whiteView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: Theme.secondary,
                    width: 60,
                    height: 30,
                    borderRadius: 4,
                    padding: 5,
                  }}>
                  <Text style={{color: Theme.white}}>33% off</Text>
                </View>
                <SliderBox
                  images={this.state.images2}
                  sliderBoxHeight={200}
                  resizeMode="cover"
                  ImageComponentStyle={{borderRadius: 10}}
                  parentWidth={Theme.wp('34%')}
                  dotColor={Theme.text}
                />
                <Image source={Images.share} style={styles.share} />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.price}>₹1500</Text>
                  <Text style={styles.priceLight}> ₹1000</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.profit}>Minimum members required : </Text>
                  <Text style={styles.profitPrice}>3 </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  marginTop: '10%',
                }}>
                <View style={styles.whatsappBtn1}>
                  <Image source={Images.blueTrolly} style={styles.bu1} />
                  <Text style={styles.whatsappText}>Add to Cart</Text>
                </View>
                <View style={styles.buBtn}>
                  <Image source={Images.usersWhite} style={styles.buy} />
                  <Text style={styles.buyText1}>Group Buy</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.whiteView}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={139}
              resizeMode="cover"
              ImageComponentStyle={{borderRadius: 10}}
              parentWidth={Theme.wp('92%')}
              dotColor={Theme.subText}
            />
            <Text style={styles.label1}>Products you might like</Text>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.whiteView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: Theme.secondary,
                    width: 60,
                    height: 30,
                    borderRadius: 4,
                    padding: 5,
                  }}>
                  <Text style={{color: Theme.white}}>33% off</Text>
                </View>
                <SliderBox
                  images={this.state.images2}
                  sliderBoxHeight={200}
                  resizeMode="cover"
                  ImageComponentStyle={{borderRadius: 10}}
                  parentWidth={Theme.wp('34%')}
                  dotColor={Theme.text}
                />
                <Image source={Images.share} style={styles.share} />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.price}>₹1500</Text>
                  <Text style={styles.priceLight}> ₹1000</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.profit}>Minimum members required : </Text>
                  <Text style={styles.profitPrice}>3 </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  marginTop: '10%',
                }}>
                <View style={styles.whatsappBtn1}>
                  <Image source={Images.blueTrolly} style={styles.bu1} />
                  <Text style={styles.whatsappText}>Add to Cart</Text>
                </View>
                <View style={styles.buBtn}>
                  <Image source={Images.usersWhite} style={styles.buy} />
                  <Text style={styles.buyText1}>Group Buy</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainImage: {
    height: 150,
    width: Theme.wp('90%'),
    alignSelf: 'center',
  },
  paddingView: {
    padding: 10,
  },
  whiteView: {
    padding: 10,
    backgroundColor: Theme.white,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: Theme.wp('5%'),
    marginBottom: Theme.hp('2%'),
    marginTop: Theme.hp('2%'),
  },
  label1: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: Theme.wp('5%'),
    marginBottom: Theme.hp('2%'),
    marginTop: Theme.hp('2%'),
  },
  share: {
    height: 30,
    width: 30,
  },
  buy: {
    height: 24,
    width: 24,
  },
  whatsappText: {
    marginLeft: 10,
    color: Theme.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bu1: {
    height: 21,
    width: 21,
  },
  bu2: {
    height: 20,
    width: 26,
  },
  whatsappBtn1: {
    flexDirection: 'row',
    borderColor: Theme.primary,
    borderWidth: 1,
    width: Theme.wp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  groupView: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: '2%',
    borderColor: Theme.primary,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 8,
    borderRadius: 4,
  },
  buBtn: {
    width: Theme.wp('45%'),
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 8,

    backgroundColor: Theme.primary,
  },
  buyText: {
    color: Theme.primary,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyText1: {
    color: Theme.white,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  debatic: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profit: {
    color: Theme.primary,
    fontSize: 16,
  },
  profitPrice: {
    color: Theme.primary,
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
    marginLeft: Theme.wp('3%'),

    textDecorationLine: 'line-through',
  },
  catagoryView: {
    backgroundColor: Theme.white,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.hp('4%'),
  },
  catImages: {
    height: 71,
    width: 71,
  },

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.hp('3%'),
  },
  title: {
    textAlign: 'center',
    marginTop: 3,
    fontFamily: Theme.fontfamilyRegular,
  },
});
