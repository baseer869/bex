import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import Header2 from '../../components/Header2';
import Images from './../../constants/Images';
import Theme from './../../utils/Theme';
import StepToFollow from './../../components/UI/StepToFollow';
import Footer from '../../components/Footer';
import BackButtonHeader from './../../components/BackButtonHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 262.57,
    height: 221.59,
    alignSelf: 'center',
    marginTop: 21,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Theme.fontFamilyTitle,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Theme.text,
  },
  howWorkStyle: {
    paddingHorizontal: 15,
    marginTop: 40,
  },
  para: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Theme.text,
    lineHeight: 19.2,
    marginTop: 16.4,
    fontSize: 16,
  },
  btn: {
    width: 187,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20.25,
    lineHeight: 24,
    fontFamily: Theme.fontFamilyTitle,
    fontStyle: 'normal',
    color: Theme.text,
    fontWeight: '700',
    marginTop: 40,
  },
});

const HowItWorks = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButtonHeader navigation={navigation} />
      <ScrollView>
        <Image source={Images.howItWorks} style={styles.image} />
        <View style={styles.howWorkStyle}>
          <Text style={styles.text}>How it Works</Text>
          <Text style={styles.para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint Velit officia consequat{' '}
          </Text>
          <View style={styles.btn}>
            <CommonButton
              active
              title={'See more'}
              onPress={() => console.log('See more')}
            />
            <Text style={styles.title}>Steps to follow</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 19, width: 335, alignSelf: 'center', marginBottom:40}}>
          <StepToFollow
            image={Images.heading1}
            title={'Heading'}
            para={
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
            }
          />
        </View>
        <View style={{marginHorizontal: 19, width: 335, alignSelf: 'center', marginBottom:40 }}>
          <StepToFollow
            image={Images.heading1}
            title={'Heading'}
            para={
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
            }
          />
        </View>
        <View style={{marginHorizontal: 19, width: 335, alignSelf: 'center', marginBottom:40 }}>
          <StepToFollow
            image={Images.heading1}
            title={'Heading'}
            para={
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
            }
          />
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default HowItWorks;
