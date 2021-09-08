import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BackButtonHeader from '../../components/BackButtonHeader';
import Footer from '../../components/Footer';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <BackButtonHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.mainView}>
            <Image source={Images.faqsImage} style={styles.image} />
            <Text style={styles.label}>Have questions? Connect with us</Text>
            <Text style={styles.subHeading}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint Velit officia consequat
            </Text>
            <View style={styles.borderView}>
              <Image source={Images.receiver} style={styles.receiver} />
              <View style={{marginLeft: Theme.wp('3%')}}>
                <Text style={styles.write}>Call now</Text>
                <View style={{flexDirection: 'row', marginTop: Theme.hp('1%')}}>
                  <Text style={{fontSize: 16}}>Call us on </Text>
                  <Text style={styles.phone}>+91 43234-54345</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderView}>
              <Image source={Images.mailbox} style={styles.mail} />
              <View style={{marginLeft: Theme.wp('3%')}}>
                <Text style={styles.write}>Write to us</Text>
                <View style={{flexDirection: 'row', marginTop: Theme.hp('1%'),}}>
                  <Text style={{fontSize: 16}}>Mail us on </Text>
                  <Text style={styles.phone}>emailaddress@gmail.com</Text>
                </View>
              </View>
            </View>
            <Text style={styles.label}>Frequently Asked Questions</Text>
            <View style={styles.queView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.question}>
                  Why am I unable to apply coupon on products in my bag?
                </Text>

                <Image source={Images.downIcon} style={styles.down} />
              </View>

              <Text style={styles.ans}>
                Ouch! This might explain why. Coupons are applicable only on
                selected merchandise. To find out whether the coupon is
                applicable on your shortlisted products or not: i. Select a
                product. ii. You will be able to see the list of offers
                applicable on the product along with Coupon code, discount
                amount, and minimum purchase to avail the discount.
              </Text>
            </View>

            <View style={styles.queView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.question}>
                  Why am I unable to apply coupon on products in my bag?
                </Text>
                <Image source={Images.downIcon} style={styles.down} />
              </View>
            </View>
            <View style={styles.queView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.question}>
                  Why am I unable to apply coupon on products in my bag?
                </Text>
                <Image source={Images.downIcon} style={styles.down} />
              </View>
            </View>
            <View style={styles.queView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.question}>
                  Why am I unable to apply coupon on products in my bag?
                </Text>
                <Image source={Images.downIcon} style={styles.down} />
              </View>
            </View>
            <View style={styles.queView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.question}>
                  Why am I unable to apply coupon on products in my bag?
                </Text>
                <Image source={Images.downIcon} style={styles.down} />
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
  },
  mainView: {
    flex: 1,
    padding: 15,
    backgroundColor: Theme.white,
  },
  image: {
    height: 221,
    width: 240,
    alignSelf: 'center',
  },
  label: {
    marginTop: Theme.hp('2%'),
    fontSize: 21,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    marginTop: Theme.hp('2%'),
  },
  borderView: {
    borderColor: Theme.border,
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: Theme.hp('4%'),
    borderRadius: 4,
    padding: 20,
  },
  mail: {
    width: 20,
    height: 19,
  },
  receiver: {
    width: 19.93,
    height: 19.87,
  },
  write: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    color: Theme.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  question: {
    fontSize: 16,
    width: '93%',
    fontWeight: 'bold',
    marginTop: Theme.hp('2%'),
  },
  ans: {
    fontSize: 16,
    marginTop: Theme.hp('1%'),
  },
  queView: {
    paddingBottom: Theme.hp('2%'),
    borderBottomColor: Theme.border,
    borderBottomWidth: 1,
  },
  down: {
    width: 14,
    height: 8,
  },
});
