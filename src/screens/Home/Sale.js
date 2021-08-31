import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/MainHeader';
import ProductComponent from '../../components/ProductComponent';
import Theme from '../../utils/Theme';

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
