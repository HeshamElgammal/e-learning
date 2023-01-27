import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';


const Activity = ({navigation}) => {
  return (
    <DrawerView navigation={navigation} titleHeader="Activity">
    </DrawerView>
  );
};

export default Activity;

const styles = StyleSheet.create({});
