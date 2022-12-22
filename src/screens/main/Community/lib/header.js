import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appSizes} from '../../../../theme';

const Header = () => {
  return (
    <>
      <Image
        source={{uri: 'https://picsum.photos/1850/700'}}
        style={{
          width: appSizes.with,
          height: appSizes.height / 5,
          position: 'absolute',
          zIndex: -1,
          opacity: 0.7,
          borderBottomRightRadius: appSizes.m,
          borderBottomLeftRadius: appSizes.m,
        }}
      />
      <View style={{height: appSizes.height / 7}} />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
