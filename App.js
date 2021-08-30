import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Routes from './src/navigations/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};
export default App;
