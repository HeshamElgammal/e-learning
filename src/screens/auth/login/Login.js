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
const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header title="Welcome!" subTitle="Sign in to continue" />
        <Form />
        <OrDividor
          title="Don't have an account?"
          subTitle="Sign up"
          press={() => {
            navigation.navigate('SignUp');
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

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
