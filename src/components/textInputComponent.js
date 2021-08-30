import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Theme from '../utils/Theme';

const SigninTextComponent = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  image,
  secureTextEntry,
  label,
  source,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: Theme.border,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        paddingLeft: 8,
        paddingTop: 6,
      }}>
      <View>
        <Text style={{fontSize: 12.64, color: Theme.primary}}>{label}</Text>
        <TextInput
          value={value}
          keyboardType={keyboardType}
          style={{
            height: 38,
            fontSize: 16,
            color: Theme.text,
          }}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={Theme.text}
          onChangeText={onChangeText}
        />
      </View>

      <Image
        source={source}
        style={{
          height: 14,
          width: 20,
          marginRight: Theme.wp('4%'),
        }}
      />
    </View>
  );
};
export default SigninTextComponent;
