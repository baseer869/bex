import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import OTPLogin from '../screens/Auth/OTPLogin';
import RefferId from '../screens/Auth/RefferId';
import Home from '../screens/Home/Home';
import Dashboard from '../screens/Home/Dashboard';
import ProductCatalogue from '../screens/ProductCatalogue';
import ProductDetailPage from '../screens/Home/ProductDetailPage';
import MyCart from '../screens/Cart/MyCart';
import DrawerNavigation from './DrawerNavigation';
import OrderSummary from './../screens/orderSummary/OrderSummary';
import ShoppingCart from './../screens/shoppingCart/ShoppingCart';
import AddressScreen from './../screens/address/AddressScreen';
import PlaceOrderScreen from './../screens/placeOrder/PlaceOrderScreen';
import CategoryScreen from './../screens/category/CategoryScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Signin} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTPLogin" component={OTPLogin} />
        <Stack.Screen name="RefferId" component={RefferId} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProductCatalogue" component={ProductCatalogue} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
