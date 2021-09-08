import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import BackButtonHeader from '../../components/BackButtonHeader';
import CommonButton from '../../components/CommonButton';
import Footer from '../../components/Footer';
import Images from './../../constants/Images';
import Theme from './../../utils/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: 234,
    height: 193,
    alignSelf: 'center',
  },
  innerContainer: {
    marginTop: 40,
    paddingLeft: 16,
    paddingRight: 28,
  },
  heading: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: Theme.text,
  },
  text: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: Theme.text,
    paddingTop: 16,
  },
  aboutView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
    paddingTop: 40,
    paddingVertical: 8,
  },
  image2: {
    resizeMode: 'contain',
    width: 76.25,
    height: 76.25,
  },
  stepText: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: Theme.primary,
    paddingTop: 8,
  },
  para: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: Theme.text,
    paddingTop: 8,
  },
  growView:{
      paddingHorizontal:15,
      paddingBottom:40,
  },
  videoimage:{
      width:324,
      height:221,
      borderRadius:4.84,
      alignSelf:'center',
      marginTop:20
  }
});

function StepToFollowAboutBex({step, image, description}) {
  return (
    <View style={styles.aboutView}>
      <Image source={image} style={styles.image2} />
      <Text style={styles.stepText}>{step}</Text>
      <Text style={styles.para}>{description}</Text>
    </View>
  );
}

const AboutBex = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButtonHeader navigation={navigation} />
        <Image source={Images.aboutBex} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>
            Grow your online business with BEX{' '}
          </Text>
          <Text style={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint Velit officia consequat{' '}
          </Text>
        </View>
        <StepToFollowAboutBex
          step={'1 . Sign Up'}
          image={Images.signup}
          description={
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat non deserunt ullamco '
          }
        />
        <StepToFollowAboutBex
          step={'2 . Cutomise your store'}
          image={Images.cstore}
          description={
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat non deserunt ullamco '
          }
        />
        <StepToFollowAboutBex
          step={'3. Start Earning'}
          image={Images.startearning}
          description={
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat non deserunt ullamco '
          }
        />
        <View style={{width:187, alignSelf:'center', margin:20}}>

        <CommonButton
          active
          title={'Start reselling'}
          onPress={() => console.log('Start reselling')}
        />
        </View>

        <View style={styles.growView}>
            <Text style={[styles.stepText, {color:Theme.text}]}>Learn tips and tricks to grow</Text>
            <Text style={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat </Text>
            <Text style={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat </Text>
          <Image source={Images.videoimage} style={styles.videoimage}/>
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default AboutBex;
