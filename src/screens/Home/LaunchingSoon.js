import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import BackButtonHeader from '../../components/BackButtonHeader';
import LaunchingProductComponent from '../../components/LaunchingProductComponent';

export default class LaunchingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <BackButtonHeader />
        <ScrollView>
          <View style={{padding: 15}}>
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
            <LaunchingProductComponent off="20% off" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
