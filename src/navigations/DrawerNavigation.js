import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import TabNavigator from './TabsNavigator';
import DrawerItems from '../components/drawer/DraweItems'; 

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator

      initialRouteName={'TabNavigator'}
      screenOptions={{headerShown:false}}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props)=> <DrawerItems {...props}/>}
      >
      <Drawer.Screen
        name="MainTabs"
        // options={{drawerLabel: 'First page Option'}}
        component={TabNavigator}
      />
      {/* add only drawer screen here   */}
    </Drawer.Navigator>
  );
}
