import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useMemo} from 'react';
import {appColors, appSizes, Fonts} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';

const Btns = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.title}>Enroll in Course</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: appColors.whiteBlue}]}>
        <Text style={[styles.title, {color: appColors.primary}]}>
          Set as Favorite
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btns;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    backgroundColor:appColors.white
    // backgroundColor: appColors.primary,
  },
  btn: {
    width: appSizes.with / 1.1,
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: appSizes.m,
    backgroundColor: appColors.primary,
    marginTop: appSizes.m,
  },
  title: {
    color: appColors.whiteBlue,
    // marginTop: appSizes.spacing_s,
    fontWeight: '600',
    fontSize: appSizes.l,
    fontFamily: Fonts.PoppinsRegular,

    // lineHeight: 25,
  },
});
