import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Images from './../../constants/Images';

const CartItem = () => {
    return (
        <View style={styles.pView}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={Images.product3}
            style={styles.pImage}
          />
          <View style={styles.titleView}>
            <View>
              <Text style={styles.debatic}> Diabetic Care</Text>
              <Text style={styles.fit}>Fit Support</Text>
              <Text style={styles.price}>₹500</Text>
            </View>
          </View>
        </View>
        <View style={styles.pmainView}>
          <View style={styles.mainBorder}>
            <View style={styles.plusView}>
              <Image
                source={Images.plus}
                style={{
                  height: 11,
                  width: 11,
                }}
              />
            </View>
            <View style={styles.plusView}>
              <Text>1</Text>
            </View>
            <View style={styles.minusView}>
              <Image
                source={Images.minus}
                style={{height: 2, width: 11}}
              />
            </View>
          </View>
          <View style={styles.whatsappBtn}>
            <Image source={Images.trash} style={styles.bu1} />
            <Text style={styles.whatsappText}>Remove</Text>
          </View>
        </View>
      </View>
    )
}

export default CartItem


const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: Theme.accent,
    },
    main1: {
      flex: 1,
      backgroundColor: Theme.white,
    },
    minusView: {
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    shopping: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      width: '59%',
      marginTop: Theme.hp('4%'),
      alignSelf: 'center',
    },
    titleView: {
      flexDirection: 'row',
      width: '60%',
      marginLeft: Theme.wp('10%'),
      justifyContent: 'space-between',
    },
    bu1: {
      height: 21,
      width: 21,
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
    whatsappText: {
      marginLeft: 5,
      color: Theme.subText,
      fontSize: 16,
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
      borderColor: Theme.border,
      borderWidth: 1,
      width: Theme.wp('27.5%'),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      borderRadius: 4,
    },
    mainBorder: {
      flexDirection: 'row',
      marginLeft: Theme.wp('8%'),
      borderWidth: 1,
      borderColor: Theme.border,
      height: 25,
      alignItems: 'center',
      borderRadius: 4,
      width: 80,
    },
    plusView: {
      width: 26,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 1,
      borderRightColor: Theme.border,
    },
    debatic: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    fit: {
      fontSize: 14,
      color: Theme.subText,
    },
    pImage: {
      height: 70,
      width: 59,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    paddingView: {
      padding: 15,
      backgroundColor: Theme.white,
    },
    pView: {
      padding: 15,
      borderRadius: 8,
      backgroundColor: Theme.white,
    },
  
    paddingView1: {
      padding: 8,
      marginHorizontal:16
      // backgroundColor: Theme.white,
    },
    myShopping: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    pmainView: {
      // paddingHorizontal: 10,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
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
    whatsappBtn: {
      flexDirection: 'row',
      width: Theme.wp('27.5%'),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20,
      borderRadius: 4,
    },
    bu1: {
      height: 21,
      width: 21,
      alignSelf: 'center',
    },
    easyStepContainer: {
       backgroundColor:Theme.white,
       paddingHorizontal:12,
       paddingVertical:15,
    },
    innerStepContainer:{
        backgroundColor:Theme.cardBackground,
        padding:12,
        borderRadius:4    
    },
    easytext:{
     fontFamily: Theme.fontFamilyPrimary,
     fontWeight:'400',
     fontSize:16,
     fontWeight:'normal',
     lineHeight:19.2,
     fontStyle:'normal',
     color:Theme.black,
     marginVertical:3
    },
    easytextTitle:{
      fontFamily: Theme.fontFamilyBold,
      fontWeight:'700',
      fontSize:16,
      fontWeight:'normal',
      lineHeight:19.2,
      fontStyle:'normal',
      color:Theme.black
    },
    applyCoupn:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Theme.white, 
        height:60,
        marginTop:4,
        paddingHorizontal:12
      },
      select:{
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:19.2,
    color:Theme.primary,
    fontFamily:Theme.fontFamilyPrimary
    },
    addressView2: {
      paddingHorizontal: 16,
      backgroundColor: Theme.white,
      paddingVertical: 24,
      marginTop:4,
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
    textView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 6,
    },
    summaryContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginVertical: 4,
      backgroundColor: Theme.white,
      // paddingVertical: 16,
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
  