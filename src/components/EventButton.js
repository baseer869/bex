import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Theme from './../utils/Theme';

const EventButton = ({onEventPress, title}) => {
    return (
        <TouchableOpacity  style={styles.container} activeOpacity={1} onPress={onEventPress} >
            <Text >{title}</Text>
        </TouchableOpacity>
    )
}

export default EventButton

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingLeft:0,
        paddingBottom:10,
        paddingRight:0,
        borderColor:Theme.subText,
        borderWidth:1,
        // width:'40%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4

    }
})
