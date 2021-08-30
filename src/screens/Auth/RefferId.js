import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {Card} from 'react-native-paper';
import Button from '../../components/Button';
import SigninTextComponent from '../../components/textInputComponent';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
export default function RefferId(props) {
  const [OTP, changeOTP] = useState('');
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={Images.refferImage}
          resizeMode="stretch"
          style={styles.loginImage}
        />
        <Card elevation={5} style={styles.card}>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>Enter your refer id</Text>
          </View>
          <Text style={styles.otp}>Enter id</Text>
          <OTPTextInput
            // ref={e => (otpInput = e)}
            color={Theme.subText}
            containerStyle={styles.OTPContainer}
            textInputStyle={styles.OTPCell}
            handleTextChange={changeOTP}
            inputCount={4}
            keyboardType="phone-pad"
          />
          <Text style={styles.forget}>Resend OTP</Text>
          <Button
            text="Let's go"
            onPress={() => props.navigation.navigate('Dashboard')}
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
    height: 322,
    width: '100%',
  },
  otp: {
    marginTop: Theme.hp('2%'),
  },
  card: {
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: Theme.hp('10%'),
    height: 370,
  },
  loginView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('4%'),
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
  forget: {
    fontSize: 14,
    color: Theme.subText,
    textAlign: 'right',
    marginTop: 8,
  },

  login: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  OTPContainer: {
    justifyContent: 'space-evenly',
    marginTop: 20,
    height: 70,
  },
  OTPCell: {
    borderRadius: 2,
    borderColor: Theme.subText,
    borderWidth: 0.5,
    width: 60,

    borderBottomColor: Theme.subText,
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.subText,
    height: 60,
  },
});
