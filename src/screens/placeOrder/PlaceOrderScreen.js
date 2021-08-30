import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Theme from './../../utils/Theme';
import Images from './../../constants/Images';
import Header2 from './../../components/Header2';
import CommonButton from '../../components/CommonButton';

const PlaceOrderScreen = ({navigation}) => {

    function trackOrder(){
        console.log('track order')
    }
    return (
        <View style={styles.container}>
            <Header2 goback/>
            <View style={styles.innerContainer}>
            <Image source={Images.successful_image} style={styles.img}/>
            <Text style={styles.slogan}>Your order has been successfully placed !!</Text>
            </View>
            <View style={styles.btContainer}>
            <CommonButton active title={'Track your order'} onPress={()=>trackOrder()}/>
            <CommonButton title={'Continue shopping'} onPress={()=>navigation.navigate('Dashboard')}/>

            </View>
        </View>
    )
}

export default PlaceOrderScreen

const styles = StyleSheet.create({
 container:{
     flex:1,
     backgroundColor:Theme.white,
 },
 innerContainer:{
alignItems:'center'
 },
 img:{
     width:241,
     height:215,
     marginTop:30
 },
 slogan:{
fontFamily: Theme.fontFamilyBold,
fontStyle:'normal',
fontSize:18,
lineHeight:24,
fontWeight:'700',
marginTop:5,
 },
 btContainer:{
     width:187,
     alignSelf:'center',
     margin:20     
 }

})
