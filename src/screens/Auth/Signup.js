import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import Button from '../../components/Button';
import SigninTextComponent from '../../components/textInputComponent';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
export default function Signup(props) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={Images.SignupImage}
          resizeMode="stretch"
          style={styles.loginImage}
        />

        <Card elevation={5} style={styles.card}>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>
          <View style={styles.signin}>
            <SigninTextComponent label="NAME" placeholder="Ryan Leanard" />
          </View>
          <View style={styles.password}>
            <SigninTextComponent
              label="PHONE NUMBER"
              placeholder="Ryan Leanard"
            />
          </View>
          <View style={styles.password}>
            <SigninTextComponent label="EMAIL" placeholder="Ryan Leanard" />
          </View>
          <View style={styles.password}>
            <SigninTextComponent
              label="PASSWORD"
              secureTextEntry={true}
              source={Images.eye}
            />
          </View>
          <View style={styles.password}>
            <SigninTextComponent
              label="CONFERM PASSWORD"
              secureTextEntry={true}
              source={Images.eye}
            />
          </View>
          <Button
            text="Sign Up"
            onPress={() => props.navigation.navigate('OTPLogin')}
          />
        </Card>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  loginImage: {
    height: 230,
    width: '100%',
  },
  card: {
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: Theme.hp('2%'),
  },
  loginView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('0.5%'),
    justifyContent: 'space-between',
  },
  loginText: {
    fontSize: 25,
    color: Theme.text,
    fontFamily: Theme.fontfamilyRegular,
    fontWeight: '700',
  },

  signin: {
    marginTop: Theme.hp('2%'),
  },
  password: {
    marginTop: Theme.hp('2%'),
  },

  login: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
