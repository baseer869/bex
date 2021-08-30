import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from './../../utils/Theme';
import SigninTextComponent from '../../components/textInputComponent';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.white
    }
})


const AddressScreen = () => {
    return (
        <View style={styles.container}>
            <Text>AddressScreen</Text>
        </View>
    )
}

export default AddressScreen

