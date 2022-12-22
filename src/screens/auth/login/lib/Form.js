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
import {appColors} from '../../../../theme/colorTheme';
import {AUTHENTICATIONS} from '../../../../utils/config';
import {CustomBtnAuth, CustomTextInput} from '../../../../components';

const Form = () => {
  const dispatch = useDispatch();
  const createValidationSchema = Yup.object().shape({
    email: Yup.string().label('Email').email().required(),
    password: Yup.string()
      .label('Password')
      .required()
      .min(2, 'Seems a bit Short..')
      .max(15, 'max 15 character..'),

    // term: Yup.boolean()
    //   .label('Terms')
    //   .test(
    //     'is-true',
    //     'Must Agree to terms to continue',
    //     value => value === true,
    //   ),
  });
  console.log(initialValues);
  const initialValues = {email: '', password: '', term: false};
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
    dispatch(saveUser(values));
    dispatch(changeAuth(AUTHENTICATIONS.AUTHENTICATED));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createValidationSchema}>
      {formikProps => (
        <>
          <CustomTextInput
            placeholder="johndoe@example.com"
            onChangeText={formikProps.handleChange('email')}
            onBlur={formikProps.handleBlur('email')}
            autoFocus
            formikProps={formikProps}
            touched={formikProps.touched.email}
            error={formikProps.errors.email}
          />

          <CustomTextInput
            placeholder="******"
            formikProps={formikProps}
            onChangeText={formikProps.handleChange('password')}
            onBlur={formikProps.handleBlur('password')}
            touched={formikProps.touched.password}
            error={formikProps.errors.password}
            secureTextEntry
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
          <CustomBtnAuth title="Sign in" formikProps={formikProps} />
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
