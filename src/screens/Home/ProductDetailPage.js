import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import BackButtonHeader from '../../components/BackButtonHeader';
import Theme from '../../utils/Theme';
import {SliderBox} from 'react-native-image-slider-box';
import Images from '../../constants/Images';
import Unorderedlist from 'react-native-unordered-list';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class ProductDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images1: [Images.productSlide1, Images.productSlide1],
      images2: [Images.product2, Images.product2],
    };
  }

  render() {
    const data = [
      {
        id: '0',
        name: 'Royan Leonard',
        image: Images.productSlide1,
        date: '19 feb, 2021',
        time: '9:50pm',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        id: '1',
        name: 'Royan Leonard',
        image: Images.productSlide1,
        date: '19 feb, 2021',
        time: '9:50pm',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
    ];
    const SimilarProducts = [
      {
        id: '0',
        name: 'Nmae of the product',
        image: Images.product2,
        brand: 'Brand Name',
        price: '₹500',
        priceLight: '₹1000',
        off: '50%',
        stars: '2.5',
      },
      {
        id: '0',
        name: 'Nmae of the product',
        image: Images.product2,
        brand: 'Brand Name',
        price: '₹500',
        priceLight: '₹1000',
        off: '50%',
        stars: '2.5',
      },
    ];
    return (
      <View style={styles.main}>
        <BackButtonHeader />
        <ScrollView>
          <View style={styles.paddingView1}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View></View>
              <SliderBox
                images={this.state.images1}
                sliderBoxHeight={200}
                resizeMode="cover"
                ImageComponentStyle={{borderRadius: 10}}
                parentWidth={Theme.wp('25%')}
                dotColor={Theme.text}
              />
              <View></View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.debatic}>Actiyo Shampoo</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.price}>₹1500</Text>
                <Text style={styles.priceLight}> ₹1000</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={styles.fit}>Actiyo Luxury</Text>
              <Text style={styles.taxes}>inclusive all taxes</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '5%',
              }}>
              <View>
                <Text style={styles.info}>Product Info</Text>
                <Text style={{marginTop: 10}}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>Quantity</Text>
              <View
                style={{
                  backgroundColor: Theme.accent,
                  width: 30,
                  height: 25,
                  marginLeft: 10,
                  borderRadius: 4,
                }}>
                <Picker style={{height: 20, width: 88}}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                </Picker>
              </View>
              <Image
                source={Images.get}
                style={{width: 130, height: 19, marginLeft: 10}}
              />
            </View>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.delivery}>Delivery and Return Details</Text>
            <Text style={styles.delivery1}>Delivery </Text>
            <Text style={styles.working}>
              This item will be delivered within 2-3 working days
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '10%',
              }}>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.navigation.navigate('ShoppingCart')}  style={styles.buBtn}>
                <Image source={Images.btnIcon} style={styles.buy} />
                <Text style={styles.buyText1}>Buy this Product</Text>
              </TouchableOpacity>
              <View style={styles.whatsappBtn1}>
                <Image source={Images.trollyDark} style={styles.bu1} />
                <Text style={styles.whatsappText}>Share and earn</Text>
              </View>
            </View>
            <Text style={styles.delivery1}>
              Check for delivery in your area
            </Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Enter pin code"
                keyboardType="number-pad"
                style={{padding: 10}}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.free}>Free Delivery bu:</Text>
              <Text style={styles.date}>Thursday, 17 June</Text>
            </View>
            <Text style={styles.warn}>Unable to deliver in your area</Text>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.delivery}>Product Details</Text>
            <Text style={styles.delivery1}>Product Specification</Text>
            <Text style={styles.content}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text style={styles.delivery1}>Product Content</Text>
            <Text style={styles.content}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Text>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
            <Unorderedlist style={{fontSize: 30}}>
              <Text style={{marginTop: 9}}>lorem</Text>
            </Unorderedlist>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.delivery}>Customer Reviews</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.paddingView}>
                <Text style={styles.delivery1}>{item.name}</Text>
                <Rating
                  type="custom"
                  ratingCount={5}
                  imageSize={12}
                  style={{alignSelf: 'flex-start', marginTop: 10}}
                />
                <Text style={styles.content}>{item.desc}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={styles.imageView}>
                    <Image source={item.image} style={styles.commentImage} />
                  </View>
                  <View style={styles.imageView1}>
                    <Image source={item.image} style={styles.commentImage} />
                  </View>
                  <View style={styles.imageView1}>
                    <Image source={item.image} style={styles.commentImage} />
                  </View>
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={styles.time}>| {item.time}</Text>
                </View>
                <View style={styles.mainLike}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image source={Images.like} style={styles.like} />
                    <Text style={styles.likes}>0</Text>
                    <Image source={Images.dislike} style={styles.dislike} />
                    <Text style={styles.likes}>0</Text>
                  </View>
                  <Text style={styles.report}>Report</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.paddingView1}>
            <Text style={styles.see}>See all reviews</Text>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.delivery}>Similar Products</Text>
            <FlatList
              data={SimilarProducts}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.mainView}>
                  <Image source={item.image} style={styles.similarImage} />
                  <Text style={styles.delivery1}>{item.name}</Text>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.priceLight1}>{item.priceLight}</Text>
                    <Text style={styles.off}>({item.off})</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{marginTop: 70}}></View>
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
  mainView: {
    width: '50%',
    alignSelf: 'center',
  },
  brand: {
    fontSize: 16,
  },
  off: {
    fontSize: 16,
    color: Theme.success,
  },
  similarImage: {
    height: 130,
    width: 102,
    alignSelf: 'center',
    marginTop: 10,
  },
  see: {
    fontSize: 18,
    color: Theme.primary,
    textDecorationLine: 'underline',
  },
  likes: {
    fontSize: 18,
    color: Theme.subText,
    marginLeft: 10,
  },

  report: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: Theme.subText,
    right: 10,
  },
  mainLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  like: {
    height: 20,
    width: 20,
  },
  dislike: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  dateText: {
    color: Theme.subText,
  },
  time: {
    color: Theme.subText,
    marginLeft: 10,
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imageView: {
    backgroundColor: Theme.accent,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 90,
  },
  imageView1: {
    backgroundColor: Theme.accent,
    width: 90,
    marginLeft: 10,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 90,
  },
  commentImage: {
    height: 75,
    width: 45,
  },
  content: {fontSize: 16, marginTop: 5},
  input: {
    borderColor: Theme.border,
    borderRadius: 4,
    marginTop: 10,
    borderWidth: 1,
  },
  warn: {
    color: Theme.error,
    fontSize: 16,
    marginTop: 5,
  },
  date: {
    fontSize: 16,
    color: Theme.success,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  free: {
    fontSize: 16,
    color: Theme.success,
  },
  delivery: {
    fontSize: 18,
    fontWeight: 'bold',
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
  delivery1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    width: '100%',
  },
  working: {
    fontSize: 16,
    marginTop: 5,
  },
  taxes: {
    color: Theme.secondary,
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceLight: {
    color: Theme.subText,
  },
  priceLight1: {
    color: Theme.subText,
    marginLeft: 7,
  },
  paddingView1: {
    padding: 15,
    backgroundColor: Theme.white,
  },
  paddingView: {
    padding: 15,
    backgroundColor: Theme.white,
    marginTop: 10,
  },
  debatic: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buy: {
    height: 18,

    width: 16,
  },
  buyText1: {
    color: Theme.white,
    marginLeft: 10,
    fontSize: 16,
  },
  bu1: {
    height: 21,
    width: 21,
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
  whatsappText: {
    marginLeft: 10,
    color: Theme.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
