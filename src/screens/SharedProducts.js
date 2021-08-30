import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Header from '../components/MainHeader';
import Theme from '../utils/Theme';
import Images from '../constants/Images';
import ProductComponent from '../components/ProductComponent';
import CatalogueComponent from '../components/CatalogueComponent';

export default class SharedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <ScrollView style={{padding: 10}}>
          <CatalogueComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
            text="Share again"
          />
          <CatalogueComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
            text="Share again"
          />
          <CatalogueComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
            text="Share again"
          />
          <CatalogueComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
            text="Share again"
          />
          <CatalogueComponent
            off="33% off"
            onPress={() => this.props.navigation.navigate('MyCart')}
            text="Share again"
          />
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
