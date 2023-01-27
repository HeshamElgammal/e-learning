import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import DrawerNavigation from './Drawer';
import AuthStack from './Auth';
import {AUTHENTICATIONS} from 'config';
const Stack = createSharedElementStackNavigator();
const Root = () => {
  const authenticted = useSelector(state => state.user.authenticated);
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={options}>
      {authenticted == AUTHENTICATIONS.NOT_AUTHENTICATED ? (
        <Stack.Screen component={AuthStack} name="AuthStack" />
      ) : (
        <Stack.Screen component={DrawerNavigation} name="DrawerStack" />
      )}
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});
