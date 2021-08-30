import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Theme from '../utils/Theme';

const ProfileInputsComponent = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  image,
  secureTextEntry,
  label,
  source,
  change,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: Theme.hp('2%'),
        }}>
        <Text style={{fontSize: 16, color: Theme.text}}>{label}</Text>
        <Text style={{fontSize: 14, color: Theme.primary}}>{change}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: Theme.hp('1%'),
          borderColor: Theme.border,
          borderWidth: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 4,
          paddingLeft: 8,
          paddingTop: 6,
        }}>
        <View>
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
            placeholderTextColor={Theme.subText}
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
    </View>
  );
};
export default ProfileInputsComponent;
