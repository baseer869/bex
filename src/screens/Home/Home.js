import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Picker,
  FlatList,
  TouchableWithoutFeedbackComponent,
} from 'react-native';
import Header from '../../components/MainHeader';
import Theme from '../../utils/Theme';
import {SliderBox} from 'react-native-image-slider-box';
import Images from '../../constants/Images';
import ProductComponent from '../../components/ProductComponent';
import BackButtonHeader from '../../components/BackButtonHeader';
import SimpleHeader from '../../components/SimpleHeader';
import {Card} from 'react-native-paper';
import Footer from '../../components/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/Images/image1.png'),
        require('../../assets/Images/image1.png'),
      ],
      images1: [Images.productSlide1, Images.productSlide1],
      images2: [Images.product2, Images.product2],
    };
  }

  render() {
    const toggleDrawer = () => {
      this.props.navigation.toggleDrawer();
    };
    const BestSeller = [
      {
        id: '0',
        name: 'Oxitru',
        price: '₹1000',
      },
      {
        id: '1',
        name: 'Oxitru',
        price: '₹1000',
      },
      {
        id: '2',
        name: 'Oxitru',
        price: '₹1000',
      },
    ];
    return (
      <View style={styles.main}>
        <Header navigation={this.props.navigation} onPress={() => toggleDrawer()} />

        <ScrollView>
          <View style={{backgroundColor: Theme.white}}>
            <View style={styles.paddingView}>
              <SliderBox
                images={this.state.images}
                sliderBoxHeight={159}
                resizeMode="cover"
                ImageComponentStyle={{borderRadius: 10}}
                parentWidth={Theme.wp('92%')}
                dotColor={Theme.text}
              />
              <View style={styles.iconRow}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('CategoryScreen')
                  }>
                  <Image source={Images.catIcon} style={styles.icons} />
                  <Text style={styles.title}>Catagory</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Sale')}>
                  <Image source={Images.salesIcon} style={styles.icons} />
                  <Text style={styles.title}>Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('offers')}>
                  <Image source={Images.offersIcon} style={styles.icons} />
                  <Text style={styles.title}>Offers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('GroupBuyHome')
                  }>
                  <Image source={Images.groupByIcon} style={styles.icons} />
                  <Text style={styles.title}>Group Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop: Theme.hp('3%')}}
                  onPress={() =>
                    this.props.navigation.navigate('LaunchingSoon')
                  }>
                  <Image source={Images.timer} style={styles.icons} />
                  <Text style={styles.title}>Launching </Text>
                  <Text style={styles.title}>Soon</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.flashSale}>Flash Sale</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.endText}>Ends in </Text>
                  <View style={styles.time}>
                    <Text>08</Text>
                  </View>
                  <View style={styles.time1}>
                    <Text>15</Text>
                  </View>
                  <View style={styles.time1}>
                    <Text>50</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paddingView}>
            <ProductComponent
              off="30% off"
              onPress={() =>
                this.props.navigation.navigate('ProductDetailPage')
              }
            />
          </View>
          <View style={styles.catagoryView}>
            <View style={styles.paddingView}>
              <View style={styles.catView}>
                <Text style={styles.allCatText}>All Catagories</Text>
                <View style={styles.seeView}>
                  <Text style={styles.seeText}>Seee All</Text>
                  <Image source={Images.rightArrow} style={styles.rightArrow} />
                </View>
              </View>
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
                <Text style={styles.deals}>Deals of the Day</Text>
              </View>
            </View>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.paddingView1}>
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
                  images={this.state.images1}
                  sliderBoxHeight={200}
                  resizeMode="cover"
                  ImageComponentStyle={{borderRadius: 10}}
                  parentWidth={Theme.wp('22%')}
                  dotColor={Theme.text}
                  dotStyle={{width: 7, height: 7, top: Theme.hp('1.7%')}}
                   inactiveDotColor={Theme.subText}
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
                  <Text style={styles.profit}>Profit: </Text>
                  <Text style={styles.profitPrice}>₹1500</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderTopWidth: 0.4,
                  borderTopColor: Theme.subText,
                  marginTop: '4%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.props.navigation.navigate('ProductDetailPage')
                  }
                  style={styles.buyButn}>
                  <Image source={Images.buyIcon} style={styles.buy} />
                  <Text style={styles.buyText}>Buy</Text>
                </TouchableOpacity>
                <View style={styles.whatsappBtn}>
                  <Image source={Images.whatsapp} style={styles.bu1} />
                  <Text style={styles.whatsappText}>Share</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paddingView1}>
            <Image source={Images.mobile} style={styles.mobile} />
            <Text style={styles.deals}>Bex Top Sellers</Text>
            <View>
              <FlatList
                data={BestSeller}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={{padding: 7}}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('ProductDetailPage')
                      }>
                      <Card elevation={5} style={styles.sellerView}>
                        <View style={styles.off}>
                          <Text style={{color: Theme.white}}>33% off</Text>
                        </View>

                        <Image
                          source={Images.productSlide1}
                          style={styles.product}
                        />
                      </Card>
                      <View style={{marginTop: 5}}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.bestPrice}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.paddingView}>
            <View
              style={{
                backgroundColor: Theme.white,
                flexDirection: 'row',
                borderRadius: 4,
                padding: 5,
              }}>
              <View style={{padding: 12, borderRightWidth: 0.5}}>
                <Text style={styles.filterText}>For you</Text>
              </View>
              <View style={{padding: 10, borderRightWidth: 0.5}}>
                <Text style={styles.filterText}>Sale</Text>
              </View>
              <View style={{padding: 10, borderRightWidth: 0.5}}>
                <Picker style={{height: 20, width: 95}}>
                  <Picker.Item label="price" value="Price" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
              <View style={{padding: 10, borderRightWidth: 0.5}}>
                <Picker style={{height: 20, width: 98}}>
                  <Picker.Item label="Catagory" value="Price" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.paddingView1}>
            <Text style={styles.deals}>
              Products you can buy with your friends
            </Text>
          </View>
          <View style={styles.paddingView1}>
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
                <Text style={styles.profit}>Profit: </Text>
                <Text style={styles.profitPrice}>₹1500</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '10%',
              }}>
              <TouchableOpacity
                style={styles.buBtn}
                onPress={() =>
                  this.props.navigation.navigate('ProductDetailPage')
                }>
                <Image source={Images.btnIcon} style={styles.buy} />
                <Text style={styles.buyText1}>Buy this Product</Text>
              </TouchableOpacity>
              <View style={styles.whatsappBtn1}>
                <Image source={Images.whatsapp} style={styles.bu1} />
                <Text style={styles.whatsappText}>Share and earn</Text>
              </View>
            </View>
            <View style={styles.groupView}>
              <Image source={Images.users} style={styles.bu2} />
              <Text style={styles.whatsappText}>Group Buy Price ₹100 </Text>
            </View>
          </View>
          <View style={styles.paddingView1}>
            <View style={styles.resellerView}>
              <Text style={styles.deals}>Become a reseller</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: Theme.hp('3%'),
                }}>
                <View>
                  <Image source={Images.signup} style={styles.signupImage} />
                </View>
                <Image source={Images.rightLine} style={styles.rightLine} />
                <View>
                  <Image source={Images.customize} style={styles.signupImage} />
                </View>
                <Image source={Images.rightLine} style={styles.rightLine} />
                <View>
                  <Image source={Images.earning} style={styles.signupImage} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.subText}> Sign Up</Text>

                <Text style={styles.subText1}> Customize Your store</Text>

                <Text style={styles.subText2}> Start earning</Text>
              </View>
            </View>
          </View>
          <View style={styles.paddingView1}>
            <Image source={Images.bigSale} style={styles.mobile} />
            <Text style={styles.deals}>BEX CHOICE</Text>
            <View>
              <FlatList
                data={BestSeller}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={{padding: 7}}>
                    <Card elevation={5} style={styles.sellerView}>
                      <View style={styles.off}>
                        <Text style={{color: Theme.white}}>20% off</Text>
                      </View>

                      <Image
                        source={Images.productSlide1}
                        style={styles.product}
                      />
                    </Card>
                    <View style={{marginTop: 5, marginBottom: 15}}>
                      <Text style={styles.nameText}>{item.name}</Text>
                      <Text style={styles.bestPrice}>{item.price}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={styles.resellerView}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={styles.invite}>
                    Invite your friends and earn profit
                  </Text>
                  <Text style={styles.shareText}>
                    Share it with your friends
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 6}}>
                    <Image
                      source={Images.shareIcon}
                      style={{height: 20, width: 20}}
                    />
                    <Text style={styles.link}>www.invitationlink.com</Text>
                  </View>
                  <View style={styles.buBtn}>
                    <Text style={styles.buyText1}>Invite</Text>
                  </View>
                </View>
                <Image source={Images.inviteImage} style={styles.inviteImage} />
              </View>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.background,
  },
  invite: {
    fontSize: 16,
    fontWeight: 'bold',
    width: Theme.wp('55%'),
  },
  shareText: {
    fontSize: 16,
    marginTop: 5,
  },
  link: {
    fontSize: 16,
    marginBottom: 20,
    color: Theme.primary,
    marginLeft: 4,
  },
  inviteImage: {
    height: 110,
    width: 114,
  },
  rightLine: {
    width: 50,
    height: 5,
    marginTop: 25,
  },
  subText: {
    width: 65,
    fontWeight: 'bold',
  },
  subText1: {
    width: 65,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: -20,
    fontWeight: 'bold',
  },
  subText2: {
    width: 65,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  signupImage: {
    height: 64,
    width: 64,
  },
  buBtn: {
    width: Theme.wp('45%'),
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: Theme.primary,
  },
  resellerView: {
    backgroundColor: Theme.blueLight,
    padding: 10,
    borderRadius: 5,
  },
  whatsappBtn1: {
    flexDirection: 'row',
    borderColor: Theme.primary,
    borderWidth: 1,
    width: Theme.wp('45%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
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
  filterText: {
    fontWeight: 'bold',
  },
  nameText: {
    textAlign: 'center',
    fontSize: 16,
  },
  bestPrice: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  off: {
    backgroundColor: Theme.secondary,
    width: 52,
    height: 20,
    borderRadius: 4,

    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  mobile: {
    height: 133,
    width: '100%',
    borderRadius: 8,
  },
  product: {
    height: 130,
    width: 80,
  },
  sellerView: {
    width: '100%',
    padding: 8,
  },
  buyButn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  share: {
    height: 30,
    width: 30,
  },
  buy: {
    height: 18,

    width: 16,
  },
  whatsappText: {
    marginLeft: 10,
    color: Theme.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bu1: {
    height: 20,
    width: 21,
  },
  bu2: {
    height: 20,
    width: 26,
  },
  whatsappBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '48%',
    borderLeftWidth: 0.4,
    borderLeftColor: Theme.subText,
    padding: 10,
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
  },
  catImages: {
    height: 71,
    width: 71,
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
  },
  rightArrow: {
    height: 12,
    width: 7.5,
    marginRight: 5,
    marginLeft: 6,
  },
  allCatText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deals: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  seeText: {},
  catView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catagoryView: {
    backgroundColor: Theme.white,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.hp('4%'),
  },

  flashSale: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paddingView: {
    padding: 15,
  },
  paddingView1: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: Theme.white,
    marginTop: 10,
  },
  time: {
    marginLeft: 6,
    backgroundColor: Theme.border,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
    borderRadius: 4,
  },
  time1: {
    backgroundColor: Theme.border,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    marginLeft: 8,
    borderRadius: 4,
    width: 24,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.hp('3%'),
  },
  endText: {
    color: Theme.subText,
  },
  icons: {
    height: 56,
    width: 56,
  },
  title: {
    textAlign: 'center',
    marginTop: 3,
    fontFamily: Theme.fontfamilyRegular,
  },
});
