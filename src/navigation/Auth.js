import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Login, SignUp} from 'screens';
import ForgetPassword from 'screens/auth/forgetPassword/ForgetPassword';
import Verify from 'screens/auth/verify/Verify';

const Stack = createSharedElementStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        title: '',
      }}
      
      >
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Verify} name="verify" />
      <Stack.Screen component={ForgetPassword} name="forgetPassword" />
      <Stack.Screen component={SignUp} name="SignUp" />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
