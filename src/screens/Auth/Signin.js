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
export default function Signin(props) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={Images.loginImage}
          resizeMode="stretch"
          style={styles.loginImage}
        />
        <Card elevation={5} style={styles.card}>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>Login</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.create}>Create an account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signin}>
            <SigninTextComponent label="USERNAME" placeholder="Ryan Leanard" />
          </View>
          <View style={styles.password}>
            <SigninTextComponent
              label="PASWORD"
              secureTextEntry={true}
              source={Images.eye}
            />
          </View>
          <Text style={styles.forget}>Forget Password</Text>

          <Button
            text="Login"
            onPress={() => props.navigation.navigate('App')}
          />
          <View style={styles.rowView}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>or</Text>
            <View style={styles.line}></View>
          </View>
          <Text style={styles.login}>Log in with</Text>
          <View style={styles.socialView}>
            <Image source={Images.google} style={styles.social} />
            <Image source={Images.facebook} style={styles.social} />
            <Image source={Images.twiter} style={styles.social} />
          </View>
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
    height: 322,
    width: '100%',
  },
  card: {
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: Theme.hp('2%'),
    height: 440,
  },
  loginView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('1%'),
    justifyContent: 'space-between',
  },
  loginText: {
    fontSize: 25,
    color: Theme.text,
    fontFamily: Theme.fontfamilyRegular,
    fontWeight: '700',
  },
  create: {
    color: Theme.secondary,
    fontFamily: Theme.fontfamilyRegular,
  },
  signin: {
    marginTop: Theme.hp('2%'),
  },
  password: {
    marginTop: Theme.hp('2%'),
  },
  forget: {
    fontSize: 14,
    color: Theme.subText,
    textAlign: 'right',
    marginTop: 8,
  },
  line: {
    backgroundColor: Theme.border,
    height: 1,
    width: '45%',
  },
  rowView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('1%'),
  },
  orText: {
    color: Theme.subText,
    fontSize: 16,
    fontFamily: Theme.fontfamilyRegular,
  },
  login: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  social: {
    height: 40,
    width: 40,
  },
  socialView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
});
