import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {CourseInfo, Home} from '../screens';
const Stack = createSharedElementStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '',
        headerShown:false
      }}>
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
