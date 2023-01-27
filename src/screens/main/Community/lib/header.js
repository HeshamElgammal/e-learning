import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appSizes} from '../../../../theme';

const Header = () => {
  return (
    <>
      <Image
        source={{uri: 'https://plus.unsplash.com/premium_photo-1661539032823-e60652a0885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}}
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
      {/* <View style={{height: appSizes.height / 7}} /> */}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
