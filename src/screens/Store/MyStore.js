import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderWithText from '../../components/HeaderWithText';
import Header from '../../components/MainHeader';

export default class MyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <HeaderWithText text="My Store" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
});
