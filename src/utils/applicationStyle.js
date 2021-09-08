import { StyleSheet } from "react-native";
import Theme from './Theme';


const commonStyle = StyleSheet.create({
 titleBold:{
     fontFamily:Theme.fontFamilyPrimary,
     fontSize:16,
     lineHeight:19.2,
     fontWeight:'700',
     fontStyle:'normal',
     color:Theme.text
 },
 normalText:{
     fontFamily:Theme.fontFamilyPrimary,
     fontStyle:'normal',
     fontWeight:'400',
     fontSize:16,
     lineHeight:19.2
 }

});

export default commonStyle;