import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Header from '../components/MainHeader';
import Theme from '../utils/Theme';
import Images from '../constants/Images';
import ProductComponent from '../components/ProductComponent';

export default class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <ScrollView style={{padding: 10}}>
          <ProductComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
          />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
          <ProductComponent off="33% off" />
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
});
