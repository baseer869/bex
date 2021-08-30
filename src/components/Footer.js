import {ThemeProvider} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Theme from '../utils/Theme';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.geting}>
          Get exciting offers and great deals everyday
        </Text>
        <Text style={styles.subcribe}>Subscribe to our newsletter</Text>
        <View style={styles.innput}>
          <TextInput
            placeholder="Enter your email address"
            style={{fontSize: 16, paddingStart: 15}}
          />
        </View>
        <View style={styles.whatsappBtn1}>
          <Text style={styles.whatsappText}>Subscribe</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: Theme.primary,
    padding: 15,
    alignItems: 'center',
  },
  geting: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Theme.white,
    width: 250,
    textAlign: 'center',
  },
  subcribe: {
    fontSize: 16,
    color: Theme.white,
    marginTop: 5,
  },
  innput: {
    width: 240,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: Theme.white,
  },
  whatsappBtn1: {
    flexDirection: 'row',
    borderColor: Theme.white,
    borderWidth: 1,
    paddingVertical: 10,
    width: Theme.wp('50%'),
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  bu1: {
    height: 20,
    width: 21,
  },
  whatsappText: {
    marginLeft: 10,
    color: Theme.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
