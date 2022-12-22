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
    name: Yup.string()
      .label('Name')
      .trim()
      .required()
      .min(2, 'Seems a bit Short..')
      .max(15, 'max 15 character..'),
    phone: Yup.string()
      .label('Phone')
      .trim()
      .required()
      .min(2, 'Seems a bit Short..')
      .max(15, 'max 15 character..'),
    email: Yup.string().label('Email').email().trim().required(),
    password: Yup.string()
      .label('Password')
      .required()
      .trim()
      .min(2, 'Seems a bit Short..')
      .max(15, 'max 15 character..'),
    confirmPassword: Yup.string()
      .label('ConfirmPassword')
      .required()
      .test('passwords-match', 'Password must match', function (value) {
        return this.parent.password === value;
      }),
    //   gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
    // term: Yup.boolean()
    //   .label('Terms')
    //   .test(
    //     'is-true',
    //     'Must Agree to terms to continue',
    //     value => value === true,
    //   ),
  });
  console.log(initialValues);
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    term: false,
    // gender:''
  };
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
            placeholder="john"
            onChangeText={formikProps.handleChange('name')}
            onBlur={formikProps.handleBlur('name')}
            autoFocus
            formikProps={formikProps}
            touched={formikProps.touched.name}
            error={formikProps.errors.name}
          />
          <CustomTextInput
            placeholder="01*******"
            onChangeText={formikProps.handleChange('phone')}
            onBlur={formikProps.handleBlur('phone')}
            formikProps={formikProps}
            touched={formikProps.touched.phone}
            error={formikProps.errors.phone}
          />
          <CustomTextInput
            placeholder="johndoe@example.com"
            onChangeText={formikProps.handleChange('email')}
            onBlur={formikProps.handleBlur('email')}
            formikProps={formikProps}
            touched={formikProps.touched.email}
            error={formikProps.errors.email}
          />

          <CustomTextInput
            placeholder="Pass****"
            formikProps={formikProps}
            onChangeText={formikProps.handleChange('password')}
            onBlur={formikProps.handleBlur('password')}
            touched={formikProps.touched.password}
            error={formikProps.errors.password}
            secureTextEntry
          />
          <CustomTextInput
            placeholder="Confirm Pass***"
            formikProps={formikProps}
            onChangeText={formikProps.handleChange('confirmPassword')}
            onBlur={formikProps.handleBlur('confirmPassword')}
            touched={formikProps.touched.confirmPassword}
            error={formikProps.errors.confirmPassword}
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
          <CustomBtnAuth title="Sign up" formikProps={formikProps} />
        </>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({});
