import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header2 from '../../components/Header2';
import Theme from './../../utils/Theme';
import TermsAndPolicyTitleView from './../../components/UI/TermsAndPolicyTitleView';
import Footer from '../../components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Theme.fontFamilyTitle,
    fontStyle: 'normal',
    color: Theme.text,
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  paraStyle: {
    marginTop: 20.22,
  },
  paraText: {
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Theme.text,
    lineHeight: 19.2,
    marginTop: 16.4,
    fontSize: 16,
    paddingHorizontal: 16.04,
  },
});

function Paragraph({para}) {
  return <Text style={styles.paraText}>{para}</Text>;
}

const TermsAndCondition = () => {
  return (
    <View style={styles.container}>
      <Header2 goback />
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.paraStyle}>
            <Text style={styles.title}>Terms and Conditions</Text>
            <View style={{paddingHorizontal: 8.14}}>
              <Text style={styles.paraText}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia consequat
              </Text>
            </View>

            <View style={{marginBottom: 32.49}}>
              <Paragraph
                para={
                  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat'
                }
              />
            </View>
          </View>
          <View
            style={{
                marginLeft: 8.14,
            }}>
            <TermsAndPolicyTitleView title={'Terms and Conditions'} />
          </View>
          <View style={{marginBottom: 32.49}}>
            <Paragraph
              para={
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat'
              }
            />
          </View>
          <View
            style={{
              marginLeft: 8.14,
            }}>
            <TermsAndPolicyTitleView title={'Privacy Policies'} />
          </View>
          <View style={{marginBottom: 32.49}}>
            <Paragraph
              para={
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat iqua dolor do amet sint Velit officia consequat'
              }
            />
          </View>
          <Footer/>
        </ScrollView>
      </View>
    </View>
  );
};
export default TermsAndCondition;
