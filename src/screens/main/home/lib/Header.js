import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../../../theme/colorTheme';
import {appSizes} from '../../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

const Header = ({title, subTitle}) => {
  return (
    <View
      style={{
        width: '80%',
        marginTop: RFValue(5),
        marginBottom: RFValue(10),
        alignSelf: 'flex-start',
      }}>
      <Text style={[styles.titlee(appColors.primary)]}>
        Let's learn something today! 👋
      </Text>
      <View style={styles?.conatinerHomeSvg}>
        <View style={styles?.smallCircle} />
        <View style={styles?.smallCircle} />
        <View style={styles.smallLine} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titlee: color => ({
    fontSize: 25,
    color: color,
    marginLeft: appSizes.padding_l,
    marginBottom: appSizes.spacing_s,
  }),
  smallLine: {
    width: 30,
    height: 6,
    backgroundColor: appColors.fourth,
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
    // paddingTop: 3,
    marginLeft: appSizes.padding_l,
  },
  smallCircle: {
    width: 10,
    height: 6,
    backgroundColor: appColors.fourth,
    borderRadius: 90,
    marginRight: 2,
  },
});
