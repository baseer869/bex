import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import HeaderWithText from '../../components/HeaderWithText';
import ProfileInputsComponent from '../../components/profileInputsComponent';
import SimpleHeader from '../../components/SimpleHeader';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Theme.white}}>
        <SimpleHeader navigation={this.props.navigation} text="My Account" source={Images.backArrow} />
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.profile}>My Profile Details</Text>
            <ImageBackground
              source={Images.profileImage}
              style={{height: 80, width: 80}}>
              <Image
                source={Images.editIcon}
                style={{
                  height: 40,
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 40,
                }}
              />
            </ImageBackground>
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Name"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Phone Number"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Email"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Address"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="City"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="State"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Pin Code"
            />
            <ProfileInputsComponent
              placeholder="eg. Ryan Lenard"
              label="Password"
              change="Chnage Password"
            />
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save Changes</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    padding: 15,
    flex: 1,
    backgroundColor: Theme.white,
  },
  profile: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    width: Theme.wp('50%'),
    borderRadius: 4,
    marginTop: Theme.hp('2%'),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Theme.primary,
    borderWidth: 1,
  },
  btnText: {
    color: Theme.primary,
    // fontWeight: 'bold',
    fontSize: 16,
  },
});
