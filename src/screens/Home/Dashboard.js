import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import RefferId from '../Auth/RefferId';
import OTPLogin from '../Auth/OTPLogin';
import Signup from '../Auth/Signup';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import ProductCatalogue from '../ProductCatalogue';
import MyStore from '../Store/MyStore';
import CategoryScreen from './../category/CategoryScreen';
import AccordionView from './../category/Test';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? Images.homeDark : Images.homeLight;
          } else if (route.name === 'Catagory') {
            iconName = focused ? Images.catagoryDark : Images.catagoryLight;
          } else if (route.name === 'My Store') {
            iconName = focused ? Images.storeDark : Images.storeLight;
          } else if (route.name === 'Account') {
            iconName = focused ? Images.userDark : Images.userLight;
          }

          return <Image source={iconName} style={{height: 23.5, width: 22}} />;
        },
      })}
      tabBarOptions={{
        showLabel: true,

        style: {color: Theme.primary},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Catagory"
        component={CategoryScreen}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="My Store"
        component={MyStore}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Account"
        component={Signup}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
    </Tab.Navigator>
  );
}
