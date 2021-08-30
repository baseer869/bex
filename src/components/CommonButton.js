import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Theme from './../utils/Theme';

const CommonButton = ({title, onPress, active}) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[active ? styles.activeBtn: styles.defaultBtn]}  onPress={()=>onPress()}>
            <Text style={[ active ? styles.activText: styles.default]} >
            {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({
activeBtn:{
  backgroundColor:Theme.primary,
  paddingTop:16,
  paddingRight:8,
  paddingBottom:16,
  paddingLeft:8,
  borderRadius:4,
  marginVertical:10,
  justifyContent:'center',
  alignItems:'center'
},
activText:{
fontFamily:Theme.fontFamilyPrimary,
fontWeight:'700',
fontSize:18,
lineHeight:21.2,
fontStyle:'normal',
color:Theme.white
},
defaultBtn:{
    borderColor:Theme.primary,
    paddingTop:16,
    paddingRight:8,
    paddingBottom:16,
    paddingLeft:8,
    borderRadius:4,
    borderWidth:1,
    marginVertical:8,
    justifyContent:'center',
    alignItems:'center'
},
default:{
    fontFamily:Theme.fontFamilyPrimary,
fontWeight:'700',
fontSize:18,
lineHeight:21.2,
fontStyle:'normal',
    color:Theme.primary,
}


})
