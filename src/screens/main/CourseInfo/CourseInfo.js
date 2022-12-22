import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from '../../DrawerView';

const CourseInfo = ({navigation}) => {
  return (
    <DrawerView
      navigation={navigation}
      style={styles.container}
      titleHeader="Course Info"></DrawerView>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {},
});
