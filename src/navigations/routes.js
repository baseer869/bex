import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigator from './AuthNavigator';
// import AboutBex from './../screens/about/AboutBex';
import Faqs from './../screens/ContentPages/Faqs';

const Main = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Main.Navigator
      initialRouteName={'App'}
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name="Auth" component={AuthNavigator} />

        <Main.Screen name={'App'} component={DrawerNavigation} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
