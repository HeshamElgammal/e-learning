import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';


const Notifications = ({navigation}) => {
  return (
    <DrawerView navigation={navigation} titleHeader={"Notifications"}>
      {/* <Text style={{color: '#f00'}}>Notifications</Text> */}
    </DrawerView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
