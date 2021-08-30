import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import Images from './../../constants/Images';

const OrderButton = ({title, onPress}) => {

 const Button = () =>{
    return (
      <TouchableOpacity
          activeOpacity={1}
          onPress={()=>onPress()}
          style={styles.procsedbtn}>
          <Text style={[styles.text1, {color: Theme.white}]}>{title}</Text>
          <Image source={Images.right} style={styles.img} />
        </TouchableOpacity>
    )
 }

    return (
        <View style={styles.summaryContainer}>
        <View style={styles.summaryView}>
          <Text style={styles.Proprice}>₹500</Text>
          <Text style={styles.textSummary}>View Summary</Text>
        </View>
        <Button />
      </View>
    )
}

export default OrderButton

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.backgroundColor,
    },
  
    addressView: {
      paddingVertical: 10,
      backgroundColor: Theme.white,
      paddingHorizontal: 16,
    },
    deliverToView: {
      marginTop: Theme.hp('1%'),
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 10.67,
      height: 13.33,
      tintColor: Theme.text,
    },
    text: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 16.8,
      color: Theme.text,
      marginVertical: Theme.hp('1%'),
    },
    title: {
      color: Theme.text,
      fontSize: 16,
      lineHeight: 19.2,
      fontFamily: Theme.fontFamilyPrimary,
      fontStyle: 'normal',
      fontWeight: '700',
      paddingVertical: 5,
    },
    button: {
      paddingTop: 10,
      paddingLeft: 0,
      paddingBottom: 10,
      paddingRight: 0,
      borderColor: Theme.subText,
      borderWidth: 1,
      width: 106,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    btnchng: {
      marginLeft: 15,
      width: 152,
      borderColor: Theme.primaryLight,
    },
    btnText: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: 19.2,
      color: Theme.subText,
    },
    pView: {
      padding: 15,
      borderRadius: 8,
      backgroundColor: Theme.white,
      marginHorizontal: 16,
      marginVertical: 8,
    },
    pImage: {
      height: 70,
      width: 59,
    },
    titleView: {
      flexDirection: 'row',
      width: '60%',
      marginLeft: Theme.wp('10%'),
      justifyContent: 'space-between',
    },
    debatic: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    fit: {
      fontSize: 14,
      color: Theme.subText,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buBtn: {
      width: Theme.wp('27.5%'),
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: Theme.primary,
    },
    buy: {
      height: 18,
  
      width: 16,
    },
    buyText: {
      color: Theme.white,
      marginLeft: 10,
      fontSize: 16,
    },
    whatsappBtn: {
      flexDirection: 'row',
      width: Theme.wp('27.5%'),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      borderRadius: 4,
    },
    bu1: {
      height: 21,
      width: 21,
    },
    plusView: {
      width: 26,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 1,
      borderRightColor: Theme.border,
    },
    minusView: {
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainBorder: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: Theme.border,
      height: 25,
      alignItems: 'center',
      borderRadius: 4,
      width: 80,
      marginTop: 8,
    },
    whatsappText: {
      marginLeft: 10,
      color: Theme.subText,
      fontSize: 16,
    },
    pmainView: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    addressView2: {
      paddingHorizontal: 16,
      backgroundColor: Theme.white,
      paddingVertical: 24,
    },
    textView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 6,
    },
    text1: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '700',
      fontSize: 16,
      fontStyle: 'normal',
      color: Theme.text,
      lineHeight: 19.2,
    },
    text2: {
      fontWeight: '400',
      fontSize: 14,
    },
    marginAdded: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '500',
      fontSize: 14,
      fontStyle: 'normal',
      color: Theme.success,
      lineHeight: 15.2,
    },
    horizonline: {
      borderWidth: 0.5,
      borderColor: Theme.subText,
      marginVertical: 5,
    },
    summaryContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginTop: 4,
      backgroundColor: Theme.white,
      paddingVertical: 16,
      justifyContent: 'space-between',
      height: 92,
      alignItems: 'center',
    },
    procsedbtn: {
      width: 120,
      height: 40,
      backgroundColor: Theme.primary,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    img: {
      marginLeft: 10,
    },
    Proprice: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '700',
      fontSize: 18,
      fontStyle: 'normal',
      color: Theme.secondary,
      lineHeight: 21.6,
    },
    textSummary: {
      fontFamily: Theme.fontFamilyPrimary,
      fontWeight: '400',
      fontSize: 14,
      fontStyle: 'normal',
      color: Theme.subText,
      lineHeight: 18.6,
      textAlign: 'center',
    },
  });
  
