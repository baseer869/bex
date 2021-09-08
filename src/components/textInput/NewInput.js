import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import commonStyle from './../../utils/applicationStyle';
import Theme from './../../utils/Theme';

const NewInput = ({
  multiline,
  numberOfLines,
  address,
  label,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <Text style={commonStyle.normalText}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={address ? styles.addressInput : styles.input}
      />
    </View>
  );
};

export default NewInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Theme.border,
    padding: 10,
    borderRadius: 4,
    marginTop: Theme.hp('1.5%'),
    height: 51,
  },
  addressInput: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 4,
    marginTop: Theme.hp('1%'),
    height: 89,
    padding: 10,
  },
});
