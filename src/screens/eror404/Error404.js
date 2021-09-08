import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import BackButtonHeader from './../../components/BackButtonHeader';
import Images from './../../constants/Images';
import Theme from './../../utils/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  image: {
    width: 284,
    height: 295,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  error: {
    fontSize: 18,
    fontStyle: 'normal',
    fontFamily: Theme.fontFamilyPrimary,
    lineHeight: 22,
    color: Theme.subText,
    fontWeight: '500',
  },
  text: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: Theme.text,
    paddingTop: 16,
  },
  subText: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: Theme.black,
    paddingTop: 16,
  },
  linkText: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: Theme.primary,
    paddingTop: 16,
  },
});

const Error404 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButtonHeader navigation={navigation} />
      <Image source={Images.howItWorks} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.error}>Error 404</Text>
        <Text style={styles.text}>
          We can’t find the page you’re looking for{' '}
        </Text>
        <Text style={styles.subText}>
          Here are some other links you can browse{' '}
        </Text>
        <Text style={styles.linkText}>Home</Text>
        <Text style={styles.linkText}>Search</Text>
        <Text style={styles.linkText}>Category</Text>
      </View>
    </View>
  );
};

export default Error404;
