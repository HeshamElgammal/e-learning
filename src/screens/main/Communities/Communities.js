import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from '../../DrawerView';
import {appSizes} from '../../../theme';

const Communities = ({navigation}) => {
  return (
    <DrawerView
      navigation={navigation}
      style={styles.container}
      titleHeader="COmmunity">
      <ImageBackground
        source={{uri: 'https://picsum.photos/1850/800'}}
        style={{width: appSizes.with, height: '100%'}}></ImageBackground>
    </DrawerView>
  );
};

export default Communities;

const styles = StyleSheet.create({
  container: {},
});
