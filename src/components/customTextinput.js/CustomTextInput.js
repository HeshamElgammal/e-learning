import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {appColors} from '../../theme/colorTheme';

const CustomTextInput = ({
  formikProps,
  onChangeText,
  onBlur,
  placeholder,
  touched,
  error,
  ...rest
}) => {
  return (
    <>
      <View style={{marginBottom: 25}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={appColors.placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={onBlur}
          {...rest}
        />
        {touched && error && (
          <Text style={[styles.titleError]}>{touched && error}</Text>
        )}
      </View>
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    marginVertical: 5,
    color: appColors.input,
    marginLeft: '5%',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  titleError: {color: appColors.error, marginLeft: '5%'},
});
