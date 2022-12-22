import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DrawerView from '../../DrawerView';
import {appColors, appSizes} from '../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useState} from 'react';
import Header from './lib/header';
import HeaderTab from './lib/HeaderTab';
import Courses from './lib/Courses';

const Community = ({navigation}) => {
  const [selectedBar, setSelectedBar] = useState('Courses');
  return (
    <DrawerView
      navigation={navigation}
      style={styles.container}
      titleHeader="Home">
      <Header />
      <HeaderTab selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
      {selectedBar == 'Courses' && (
        <Courses Courses={[{courseName: 'Ui/Ux'},{courseName: 'React'}]} />
      )}
    </DrawerView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {},
});
