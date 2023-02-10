import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../theme/colorTheme';

const CustomBtnAuth = ({formikProps, title, press, style}) => {
  return (
    <TouchableOpacity
      onPress={formikProps?.handleSubmit}
      disabled={formikProps?.isSubmitting}
      style={[styles.btn,style]}>
      {formikProps.isSubmitting ? (
        <ActivityIndicator size="large" color={appColors.primary} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomBtnAuth;

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
  title: {
    color: appColors.white,
    fontSize: 18,
  },
});
