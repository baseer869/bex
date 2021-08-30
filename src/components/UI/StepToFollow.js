import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const StepToFollow = ({title, para, image}) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.para} >{para} </Text>
        </View>
    )
}

export default StepToFollow

const styles = StyleSheet.create({
card:{
    height:238,
    borderRadius:24,
    paddingTop:16,
    paddingRight:24,
    paddingBottom:16,
    paddingLeft:24,
    borderWidth:1,
    borderColor:'#EFEDFF',
    justifyContent:'center',
    alignItems:'center',
},
image:{
    width:61,
    height:63,
    marginBottom:25
},
para:{
    fontFamily: Theme.fontFamilyPrimary,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Theme.text,
    lineHeight: 19.2,
    marginTop: 16.4,
    fontSize: 16,
    marginTop:8,
    textAlign:'center'
},
title:{
    fontSize: 18,
    lineHeight: 24,
    fontFamily: Theme.fontFamilyTitle,
    fontStyle: 'normal',
    color: Theme.text,
    fontWeight:'700',
    textAlign:'center'

}


})
