import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors, appSizes} from 'theme';

const UnderLine = () => {
  return (
    <View style={styles?.conatinerHomeSvg}>
      <View style={styles?.smallCircle} />
      <View style={styles?.smallCircle} />
      <View style={styles.smallLine} />
    </View>
  );
};

export default UnderLine;

const styles = StyleSheet.create({
  smallLine: {
    width: 30,
    height: 6,
    backgroundColor: appColors.whiteBlue,
    borderRadius: 17,
  },
  iconsConatner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conatinerHomeSvg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 2,
    marginLeft: 2,
    marginBottom: appSizes.spacing_s,
    marginLeft:appSizes.spacing_m

  },
  smallCircle: {
    width: 10,
    height: 6,
    backgroundColor: appColors.whiteBlue,
    borderRadius: 90,
    marginRight: 2,
  },
});
