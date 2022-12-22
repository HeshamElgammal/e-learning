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

import {appColors} from '../../../theme/colorTheme';
import Form from './lib/Form';
import Header from './lib/Header';
import {OrDividor} from '../../../components';
const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView style={styles.container}>
      <Header title="Hi!" subTitle="Create a new account" />
      <Form />
      <OrDividor
        title="Already have an account?"
        subTitle="Sign in"
        press={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

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
