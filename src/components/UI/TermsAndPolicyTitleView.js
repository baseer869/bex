import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from './../../utils/Theme';

const styles = StyleSheet.create({
container:{
    backgroundColor:Theme.accent,
    height:44.26,
   justifyContent:'center', 
},
title:{
    fontSize: 18,
    lineHeight: 24,
    fontFamily: Theme.fontFamilyTitle,
    fontStyle: 'normal',
    color: Theme.text,
    fontWeight:'700',
    paddingLeft:8.14
}

})


const TermsAndPolicyTitleView = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default TermsAndPolicyTitleView

