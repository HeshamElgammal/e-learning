import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../../../redux/actions/UserActions/saveUser';
import {changeAuth} from '../../../../redux/actions/AuthActions/changeAuth';
import {appColors} from 'theme/colorTheme';
import {AUTHENTICATIONS} from 'config';
import {CustomBtnAuth, CustomTextInput} from 'components';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const dispatch = useDispatch();
  const {navigate}=useNavigation()
  const createValidationSchema = Yup.object().shape({
    email: Yup.string().label('Email').email().required(),
  });
  console.log(initialValues);
  const initialValues = {email: ''};
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
    // dispatch(());
    navigate("verify")
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createValidationSchema}>
      {formikProps => (
        <>
          <CustomTextInput
            placeholder="johndee@example.com"
            onChangeText={formikProps.handleChange('email')}
            onBlur={formikProps.handleBlur('email')}
            autoFocus
            formikProps={formikProps}
            touched={formikProps.touched.email}
            error={formikProps.errors.email}
          />

          {/* <Switch
            value={formikProps.values.term}
            trackColor="#a00"
            thumbColor="#888"
            ios_backgroundColor="#fefefe"
            style={{alignSelf: 'flex-start', marginLeft: '5%'}}
            onValueChange={value => {
              formikProps.setFieldValue('term', value);
            }}
          />
          <Text style={[{color: '#a00', marginLeft: '5%', marginBottom: 30}]}>
            {formikProps.touched.term && formikProps.errors.term}
          </Text> */}
          <CustomBtnAuth title="SEND SMS" formikProps={formikProps} />
        </>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    marginVertical: 5,
    color: appColors.input,
    marginLeft: '5%',
  },
});
