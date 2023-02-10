import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';

import {appColors} from 'theme/colorTheme';
import Form from './lib/Form';
import Header from './lib/Header';
import {OrDividor} from 'components';
const ForgetPassword = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header
          title="Forgot Your Password?"
          subTitle="Just enter your phone number and an SMS will be sent to your email"
        />
        <Form />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    // alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    marginVertical: 5,
    color: appColors.input,
    marginLeft: '5%',
  },
});
