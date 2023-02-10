import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  Activity,
  Communities,
  Community,
  CourseInfo,
  Home,
  Notifications,
  Quizes,
  Search,
  Setting,
} from 'screens';
import {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import CustomDrawer from 'src/drawer/CustomDrawer';
import Main from './Main';
import AddCommunity from 'screens/main/AddCommunity/AddCommunity';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  //   const menuStyle = useAnimatedStyle(() => {
  //     // const scaleY = interpolate(progres);
  //   });
  // const scrollRef = useRef(null);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
        // overlayColor: 'transparent',
        swipeEdgeWidth: Platform.OS == 'android' && 60,
        sceneContainerStyle: styles.sceneStyle,
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeStack" component={Main} />
      <Drawer.Screen name="CourseInfo" component={CourseInfo} />
      <Drawer.Screen name="Community" component={Community} />
      <Drawer.Screen name="Communities" component={Communities} />
      <Drawer.Screen name="Quizes" component={Quizes} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="AddCommunity" component={AddCommunity} />

      <Drawer.Screen name="Settings" component={Setting} />
      <Drawer.Screen name="Activities" component={Activity} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  sceneStyle: {
    backgroundColor: '#000',
  },
});
