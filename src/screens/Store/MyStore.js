import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';
import HeaderWithText from '../../components/HeaderWithText';
import Header from '../../components/MainHeader';
import Theme from '../../utils/Theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductCatalogue from '../ProductCatalogue';
import SharedProducts from '../SharedProducts';
const Tab = createMaterialTopTabNavigator();
export default class MyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  render() {
    const toggleSwitch = () => this.setState({isEnabled: true});

    return (
      <View style={{flex: 1}}>
        <HeaderWithText text="My Store" />
        <View style={styles.toggleRow}>
          <Text style={{color: Theme.text, fontWeight: '500'}}>
            Show products in stock
          </Text>
          <Switch
            trackColor={{false: Theme.secondaryLight, true: Theme.primaryLight}}
            thumbColor={this.state.isEnabled ? Theme.primary : Theme.secondary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={this.state.isEnabled}
          />
        </View>
        <View style={styles.main}>
          <Tab.Navigator>
            <Tab.Screen name="My Catalogue" component={ProductCatalogue} />
            <Tab.Screen name="Shared Products" component={SharedProducts} />
          </Tab.Navigator>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 2,
  },
  toggleRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: Theme.white,
    alignItems: 'center',
  },
});
