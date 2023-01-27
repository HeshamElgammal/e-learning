import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';


const Setting = ({navigation}) => {
  return (
    <DrawerView navigation={navigation} titleHeader="Setting">
    </DrawerView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
