import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import Home from './../screens/Home/Home';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{drawerLabel: 'First page Option'}}
        component={Signin}
      />
      <Drawer.Screen
        name="SecondPage"
        options={{drawerLabel: 'Second page Option'}}
        component={Signup}
      />
       <Drawer.Screen
        name="Home"
        // options={{drawerLabel: 'Second page Option'}}
        component={Home}
      />
    </Drawer.Navigator>
  );
}
