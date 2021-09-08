import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Theme from './../../utils/Theme';
import SigninTextComponent from '../../components/textInputComponent';
import BackButtonHeader from '../../components/BackButtonHeader';
import commonStyle from '../../utils/applicationStyle';
import NewInput from '../../components/textInput/NewInput';
import SummaryCard from '../../components/UI/SummaryCard';
import OrderButton from './../../components/UI/OrderButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.accent,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 21,
    backgroundColor: Theme.white,
  },
  inputView: {
    marginTop: Theme.hp('2%'),
  },
  inputView2: {
    marginTop: Theme.hp('3%'),
  },
});

const AddressScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButtonHeader navigation={navigation} />
        <View style={styles.innerContainer}>
          <Text style={commonStyle.titleBold}>
            Add Customer’s Shipping Address
          </Text>
          <View style={styles.inputView}>
            <NewInput
              placeholder={'Ryan Leanard'}
              label={'Name'}
              value={'Ryan Leanard'}
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              placeholder={'Ryan Leanard'}
              label={'Phone number'}
              value={'12343-43261'}
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              placeholder={'Address'}
              label={'Address'}
              value={
                '4517 Washington Ave. Manchester, Kentucky 39495 4517 Washington Ave. Manchester, Kentucky 39495'
              }
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              multiline={true}
              numberOfLines={4}
              address
              placeholder={'Address'}
              label={'Address'}
              value={
                '4517 Washington Ave. Manchester, Kentucky 39495 4517 Washington Ave. Manchester, Kentucky 39495'
              }
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              placeholder={'State'}
              label={'State'}
              value={'Kentucky'}
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              placeholder={'City'}
              label={'City'}
              value={'Manchester'}
              onChangeText={() => console.log('d')}
            />
          </View>
          <View style={styles.inputView2}>
            <NewInput
              placeholder={'Pincode'}
              label={'Pincode'}
              value={'145286'}
              onChangeText={() => console.log('d')}
            />
          </View>
        </View>
      </ScrollView>
      <OrderButton title={'Proceed'} onPress={() => console.log('dd')} />
    </View>
  );
};

export default AddressScreen;
