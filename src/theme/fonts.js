import {Platform} from 'react-native';

export const Fonts = {
  PoppinsBold: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',
  PoppinsBoldItalic:
    Platform.OS === 'ios' ? 'Poppins-BoldItalic' : 'Poppins-BoldItalic',
  PoppinsExtraBold:
    Platform.OS === 'ios' ? 'Poppins-ExtraBold' : 'Poppins-ExtraBold',
  PoppinsExtraBoldItalic:
    Platform.OS === 'ios'
      ? 'Poppins-ExtraBoldItalic'
      : 'Poppins-ExtraBoldItalic',
  PoppinsItalic: Platform.OS === 'ios' ? 'Poppins-Italic' : 'Poppins-Italic',
  PoppinsMedium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Medium',
  PoppinsMediumItalic:
    Platform.OS === 'ios' ? 'Poppins-MediumItalic' : 'Poppins-MediumItalic',
  PoppinsRegular: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
  PoppinsSemiBold:
    Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  PoppinsSemiBoldItalic:
    Platform.OS === 'ios' ? 'Poppins-SemiBoldItalic' : 'Poppins-SemiBoldItalic',
  PoppinsThin: Platform.OS === 'ios' ? 'Poppins-Thin' : 'Poppins-Thin',
  PoppinsBlack: Platform.OS === 'ios' ? 'Poppins-Black' : 'Poppins-Black',
};
