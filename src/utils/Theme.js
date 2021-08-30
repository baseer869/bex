import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Theme = {
  primary: '#AAA6D6',
  error: '#EA0606',
  secondary: '#F5831F',
  success: '#4BB543',
  white: 'white',
  background: '#E5E5E5',
  light: '#F4F3FF',
  border: '#CECECE',
  text: '#0B0A14',
  primaryLight: '#AAA6D6',
  purple: '#7066C7',
  secondaryLight: '#FFF2E7',
  blueLight: '#F3F2FF',
  subText: '#8E8E8E',
  accent: '#EFEDFF',
  accent3: '#D1CFE8',
  darkGreen: '#033E46',
  accent2: '#9B97CC',
  black: 'black',
  cardBackground: '#F8F7FF',
  fontfamilyRegular: 'Lato-Regular',
  fontFamilyBold: 'Lato-Bold',
  fontFamilyTitle:'Domine',
  fontFamilyPrimary:'Lato',
  backgroundColor:"#EFEDFF",
  fontFamilyPrimary: 'Lato',
  backgroundColor: '#EFEDFF',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  heightPer: Dimensions.get('window').height / 100,
  widthPer: Dimensions.get('window').width / 100,
  wp,
  hp,
};
