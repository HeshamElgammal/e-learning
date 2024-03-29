import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors, appSizes} from '../../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

const Header = ({Joined = false, setJoined = () => {}}) => {
  return (
    <>
      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1661539032823-e60652a0885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{
          width: appSizes.with,
          height: appSizes.height / 5,
          // position: 'absolute',
          // zIndex: -1,
          opacity: 0.9,
          borderBottomRightRadius: appSizes.m,
          borderBottomLeftRadius: appSizes.m,
        }}
      />
      <View style={{height: appSizes.spacing_l}} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setJoined(prev => !prev)}>
        <Text style={styles.title}>{`${Joined ? 'Unjoin' : 'Join'}`}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: appColors.primary,
    height: RFValue(35),
    width: RFValue(90),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: RFValue(10),
    top: RFValue(130),
    borderRadius: appSizes.spacing_s,
  },
  title: {
    fontSize: appSizes.m + 2,
    color: appColors.whiteBlue,
  },
});
