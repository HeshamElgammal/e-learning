import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';
import List from './lib/list';


const Notifications = ({navigation}) => {
  return (
    <DrawerView navigation={navigation} titleHeader={'Notifications'}>
      {/* <Text style={{color: '#f00'}}>Notifications</Text> */}
      <View style={styles.container}>
        <List />
      </View>
    </DrawerView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  flex: 1,
});
