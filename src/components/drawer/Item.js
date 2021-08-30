import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Images from '../../constants/Images'
import Theme from './../../utils/Theme';



const styles = StyleSheet.create({
    title:{
        fontFamily: Theme.fontFamilyPrimary,
        fontSize: 14,
        lineHeight: 19.2,
        fontWeight: '400',
        fontStyle: 'normal',
        marginLeft: 4,
        color:Theme.text,
        marginLeft:8
    },
    image:{
        width:32, height:32
    },
    itemStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10
    }
   
   })
   

const Item = ({title, onMenuPress, image}) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>onMenuPress()} style={styles.itemStyle} >
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Item
