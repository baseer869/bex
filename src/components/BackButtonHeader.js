import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Images from '../constants/Images';
import Theme from '../utils/Theme';

const BackButtonHeader = ({text}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Images.backArrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Image source={Images.logo} style={styles.logo} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Images.bell} style={styles.sort} />
          <Image source={Images.cartTrolly} style={styles.trolly} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowImage: {height: 22, width: 22, justifyContent: 'center'},
  main: {
    backgroundColor: Theme.primary,
  },
  sort1: {
    height: 15,
    marginRight: 10,
    width: 19,
  },
  search: {
    height: 19,
    marginLeft: 10,
    width: 19,
  },
  input: {
    backgroundColor: Theme.white,
    width: Theme.wp('73%'),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  crossImage: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: Theme.white,
    width: '100%',
    marginBottom: 10,
  },
  sort: {
    height: 22,
    width: 16,
    marginRight: 10,
  },
  trolly: {
    height: 22,
    width: 22,
  },
  filter: {
    height: 24,
    width: 24,
  },
  logo: {
    height: 45,
    width: 77,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.primary,
  },
});

export default BackButtonHeader;
