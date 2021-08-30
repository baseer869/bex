import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Theme from '../utils/Theme';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: Theme.hp('2%'),
    alignItems: 'center',
    backgroundColor: Theme.primary,
    height: 48,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: Theme.white,
    fontSize: 18,
    fontFamily: Theme.fontFamilySemiBold,
  },
});

export default Button;
