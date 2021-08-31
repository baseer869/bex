import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Signup from '../screens/Auth/Signup';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import MyStore from '../screens/Store/MyStore';
import CategoryScreen from './../screens/category/CategoryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailPage from './../screens/Home/ProductDetailPage';
import Faqs from '../screens/ContentPages/Faqs';
import Profile from '../screens/Profile/profile';
<<<<<<< Updated upstream
import Sale from '../screens/Home/Sale';
import offers from '../screens/Home/offers';
import GroupBuyHome from '../screens/GroupBuy/GroupBuyHome';
import LaunchingSoon from '../screens/Home/LaunchingSoon';
=======
import ShoppingCart from './../screens/shoppingCart/ShoppingCart';
import OrderSummary from './../screens/orderSummary/OrderSummary';
import PlaceOrderScreen from './../screens/placeOrder/PlaceOrderScreen';
>>>>>>> Stashed changes
const Tab = createBottomTabNavigator();

// HOME TABS
const HomeTabs = createNativeStackNavigator();

function HomeTabsStack() {
  return (
    <HomeTabs.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false}}>
      <HomeTabs.Screen name={'HomeScreen'} component={Home} />
      <HomeTabs.Screen
        name={'ProductDetailPage'}
        component={ProductDetailPage}
      />
<<<<<<< Updated upstream
      <HomeTabs.Screen name={'Sale'} component={Sale} />
      <HomeTabs.Screen name={'offers'} component={offers} />
      <HomeTabs.Screen name={'GroupBuyHome'} component={GroupBuyHome} />
      <HomeTabs.Screen name={'LaunchingSoon'} component={LaunchingSoon} />
      <HomeTabs.Screen name={'CategoryScreen'} component={CategoryTabsStack} />
=======
       <HomeTabs.Screen
        name={'ShoppingCart'}
        component={ShoppingCart}
      />
       <HomeTabs.Screen
        name={'OrderSummary'}
        component={OrderSummary}
      />
             <HomeTabs.Screen
        name={'PlaceOrderScreen'}
        component={PlaceOrderScreen}
      />
      
>>>>>>> Stashed changes
    </HomeTabs.Navigator>
  );
}

function CategoryTabsStack() {
  return (
    <HomeTabs.Navigator
      initialRouteName={'CategoryScreen'}
      screenOptions={{headerShown: false}}>
      <HomeTabs.Screen name={'CategoryScreen'} component={CategoryScreen} />
    </HomeTabs.Navigator>
  );
}

function MyStoreTabsStack() {
  return (
    <HomeTabs.Navigator
      initialRouteName={'MyStoreScreen'}
      screenOptions={{headerShown: false}}>
      <HomeTabs.Screen name={'MyStoreScreen'} component={MyStore} />
    </HomeTabs.Navigator>
  );
}

export default function TabNavigator() {
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
        component={HomeTabsStack}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Catagory"
        component={CategoryTabsStack}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="My Store"
        component={MyStoreTabsStack}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarLabelStyle: {color: Theme.primary, fontWeight: 'bold'},
        }}
      />
    </Tab.Navigator>
  );
}
