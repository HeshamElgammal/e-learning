import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {appColors} from '../../theme/colorTheme';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import {appSizes} from '../../theme';
import { Hesham } from '../../assets/imgs';

const Header = ({ViewStyle2, postion}) => {
  return (
    <Animated.View style={[styles.header, ViewStyle2('top')]}>
      {/* <MaskedView
        style={{flex: 1, flexDirection: 'row', height: '100%'}}
        maskElement={
          <View
            style={styles.maskStyle}>
            <Text style={styles.titleHeader}>Hi Hesham 👋</Text>
          </View>
        }>
        <View
          style={{flex: 0.2, height: '100%', backgroundColor: appColors.fifth}}
        />
        <View
          style={{flex: 0.2, height: '100%', backgroundColor: appColors.blue}}
        />
        <View
          style={{flex: 0.2, height: '100%', backgroundColor: appColors.fourth}}
        />
        <View
          style={{flex: 0.2, height: '100%', backgroundColor: appColors.yellow}}
        />
      </MaskedView> */}
      <Image style={styles.avatar} source={Hesham} />
      <Text style={styles.titleHeader}>Hi Hesham 👋</Text>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: appColors.white,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
    marginRight: RFValue(5),
    backgroundColor: appColors.blue,
    marginLeft: appSizes.spacing_s,
  },
  titleHeader: {
    color: appColors.placeholder,
    fontSize: 18,
    fontWeight: '600',
  },
  maskStyle: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
