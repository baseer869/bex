import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default function Splash(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <View style={styles.padding}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Signin')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.create}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
  },
  logo: {
    height: 64,
    width: 110,
  },
  logoView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: Theme.hp('20%'),
  },
  btn: {
    width: '100%',
    height: 48,
    borderColor: Theme.white,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    padding: 20,
    marginTop: Theme.hp('20%'),
  },
  loginText: {
    color: Theme.white,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Theme.fontfamilyRegular,
  },
  line: {
    backgroundColor: Theme.light,
    height: 1,
    width: '45%',
  },
  rowView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('4%'),
  },
  orText: {
    color: Theme.white,
    fontSize: 16,
    fontFamily: Theme.fontfamilyRegular,
  },
  create: {
    fontSize: 18,
    fontFamily: Theme.fontfamilyRegular,
    color: Theme.white,
    fontWeight: '500',
    marginTop: Theme.hp('4%'),
    textAlign: 'center',
  },
});
