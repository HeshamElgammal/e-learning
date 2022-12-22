import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');
export const appSizes = {
  s: RFValue(5),
  m: RFValue(10),
  l: RFValue(16),
  x: RFValue(20),
  with: width,
  height: height,
  spacing_s: RFValue(10),
  spacing_m: RFValue(15),
  spacing_l: RFValue(20),
  spacing_x: RFValue(25),
  padding_s:RFValue(10),
  padding_m:RFValue(14),
  padding_l:RFValue(16),
  padding_x:RFValue(18),
};
