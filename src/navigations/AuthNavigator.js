import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './../screens/Auth/Signin';
import Signup from './../screens/Auth/Signup';
import OTPLogin from './../screens/Auth/OTPLogin';
import RefferId from './../screens/Auth/RefferId';
import Splash from '../screens/Auth/Splash';
import CategoryScreen from '../screens/category/CategoryScreen';
import Sale from '../screens/Home/Sale';
import offers from '../screens/Home/offers';
import GroupBuyHome from '../screens/GroupBuy/GroupBuyHome';
import LaunchingSoon from '../screens/Home/LaunchingSoon';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Splash" component={Splash} />

      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="OTPLogin" component={OTPLogin} />
      <AuthStack.Screen name="RefferId" component={RefferId} />
      <AuthStack.Screen name="CategoryScreen" component={CategoryScreen} />

      <AuthStack.Screen name="LaunchingSoon" component={LaunchingSoon} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
