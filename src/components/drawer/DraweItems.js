import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Images from '../../constants/Images';
import Theme from './../../utils/Theme';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 40,
  },
  image: {
    height: 48,
    width: 48,
  },
  slogan: {
    fontFamily: Theme.fontFamilyPrimary,
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '400',
    fontStyle: 'normal',
    marginLeft: 4,
  },
  accountContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

const DrawerItems = ({navigation}) => {
  function HorizontalLine() {
    return <View style={{height: 2, backgroundColor: Theme.accent}} />;
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: Theme.white}}>
        <ScrollView>
          <View style={styles.profileView}>
            <Image source={Images.profileImage} style={styles.image} />
            <Text style={[styles.slogan, {fontWeight: 'bold'}]}>
              {'Welcome Ryan ,'}
              <Text style={styles.slogan}>{' check\nout our new deals'}</Text>
            </Text>
          </View>
          <HorizontalLine />
          <View style={styles.accountContainer}>
            <Item
              title={'My Account'}
              image={Images.groupBuy}
              onMenuPress={() => navigation.navigate('MyAccount')}
            />
            <Item
              title={'Group Buy'}
              image={Images.groupBuy}
              onMenuPress={() => navigation.navigate('GroupBuy')}
            />
            <Item
              title={'My Shared Products'}
              image={Images.sharedProduct}
              onMenuPress={() => navigation.navigate('SharedProduct')}
            />
            <Item
              title={'My Store'}
              image={Images.myStore}
              onMenuPress={() => navigation.navigate('MyStore')}
            />
            <Item
              title={'My Order'}
              image={Images.myOrder}
              onMenuPress={() => navigation.navigate('MyOrder')}
            />
            <Item
              title={'Refer And Earn'}
              image={Images.refAndEarn}
              onMenuPress={() => navigation.navigate('ReferAndEarn')}
            />
          </View>
          <HorizontalLine />
          <View style={styles.accountContainer}>
            <Item
              title={'Terms & Conditions'}
              image={Images.termsAndCondition}
              onMenuPress={() => navigation.navigate('TermsAndConditions')}
            />
            <Item
              title={'Privacy Policy'}
              image={Images.privacyPolicy}
              onMenuPress={() => navigation.navigate('PrivacyPolicy')}
            />
            <Item
              title={'How it works'}
              image={Images.howWorks}
              onMenuPress={() => navigation.navigate('HowItWorks')}
            />
            <Item
              title={'FAQs'}
              image={Images.faq}
              onMenuPress={() => navigation.navigate('Faq')}
            />
          </View>
          <HorizontalLine />

          <View style={styles.accountContainer}>
            <Item
              title={'Rate the App'}
              image={Images.rateApp}
              onMenuPress={() => navigation.navigate('RateApp')}
            />
          </View>

          {/* log out */}
          <View style={{height: 2, backgroundColor: Theme.accent, top: 82}} />
          <View
            style={[
              styles.accountContainer,
              {paddingVertical: 100, paddingBottom: 22},
            ]}>
            <Item
              title={'Logout'}
              image={Images.logout}
              onMenuPress={() => navigation.navigate('Logout')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerItems;
