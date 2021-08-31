import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import TabNavigator from './TabsNavigator';
import DrawerItems from '../components/drawer/DraweItems'; 
import profile from './../screens/Profile/profile';
import Faqs from './../screens/ContentPages/Faqs';
import MyStore from '../screens/Store/MyStore';
import SharedProducts from './../screens/SharedProducts';
import GroupBuyHome from './../screens/GroupBuy/GroupBuyHome';
import TermsAndCondition from './../screens/termsAndConditions/TermsAndCondition';
import PrivacyPolicy from './../screens/privacyPolicy/PrivacyPolicy';
import HowItWorks from './../screens/howItWorks/HowItWorks';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator

      initialRouteName={'TabNavigator'}
      screenOptions={{headerShown:false, swipeEnabled:false}}
      
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
        
      }}
      drawerContent={(props)=> <DrawerItems {...props}/>}
      >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
      />
       <Drawer.Screen
        name="MyAccount"
        component={profile}
      />
       <Drawer.Screen
        name="GroupBuyHome"
        component={GroupBuyHome}
      />
       <Drawer.Screen
        name="Faq"
        component={Faqs}
      />
       <Drawer.Screen
        name="MyStore"
        component={MyStore}
      />
       <Drawer.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
       <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
       <Drawer.Screen
        name="HowItWorks"
        component={HowItWorks}
      />
       <Drawer.Screen
        name="SharedProduct"
        component={SharedProducts}
      />
    </Drawer.Navigator>
  );
}
