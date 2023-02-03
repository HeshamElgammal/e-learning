import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';
import {appColors, appSizes} from 'theme';
import List from './lib/list';
import {Arabic, English, Math, Programming, Web} from 'imgs';

const Communities = ({navigation}) => {
  const list = [
    {
      title: 'Programming',
      color: appColors.blue,
      icon: Programming,
      time: '3:20:0',
    },
    {title: 'Web', color: appColors.placeholder, icon: Math, time: '3:10:0'},
    {title: 'Arabic', color: appColors.fifth, icon: Arabic, time: '1:00:0'},
    {title: 'English', color: appColors.fourth, icon: English, time: '2:20:0'},
    {title: 'Math', color: appColors.blue, icon: Programming, time: '5:10:10'},
    {
      title: 'Commonucation Skills',
      color: appColors.placeholder,
      icon: Math,
      time: '3:0:0',
    },
    {title: 'Web', color: appColors.placeholder, icon: Math, time: '3:10:0'},
    {title: 'Arabic', color: appColors.fifth, icon: Arabic, time: '1:00:0'},
    {title: 'English', color: appColors.fourth, icon: English, time: '2:20:0'},
    {title: 'Math', color: appColors.blue, icon: Programming, time: '5:10:10'},
  ];
  return (
    <DrawerView
      navigation={navigation}
      // style={styles.container}
      titleHeader="Communities">
      <View style={styles.container}>
        <List data={list} />
      </View>
    </DrawerView>
  );
};

export default Communities;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:"#f00"
  },
});
