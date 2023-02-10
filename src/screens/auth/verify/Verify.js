import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {appColors} from 'theme/colorTheme';
import Header from './lib/Header';
import {CustomBtnAuth} from 'components';
import {useNavigation} from '@react-navigation/native';

const CELL_COUNT = 4;
const Verify = () => {
  const {navigate} = useNavigation();
  const [value, setValue] = React.useState('');
  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(0);
  const [wait, setWait] = React.useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setWait(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColors.white,
      }}>
      <Header
        title="Account Verification"
        subTitle="A verification code is sent to your mobile number"
      />
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={{marginTop: 20}}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol ||
                  (isFocused ? (
                    <Cursor />
                  ) : (
                    <Text
                      style={{
                        color: '#000',
                      }}>
                      -
                    </Text>
                  ))}
              </Text>
            )}
          />
          <View style={{paddingTop: 24}}>
            {minutes === 0 && seconds === 0 ? null : (
              <Text
                style={{
                  color: appColors.primary,

                  fontSize: 22,
                }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </Text>
            )}
            <TouchableOpacity disabled={wait ? false : true}>
              <Text style={styles.resendtext}>Resend code</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomBtnAuth
          title="SUBMIT"
          formikProps={{
            handleSubmit: () => {
              navigate('Login');
            },
            isSubmitting: false,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 65,
    height: 65,
    // lineHeight: 38,
    fontSize: 22,
    borderWidth: 1,
    borderColor: appColors.placeholder,
    textAlign: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: appColors.primary,
    paddingTop: 13,
  },
  focusCell: {
    borderColor: '#000',
  },
  resendtext: {
    fontSize: 20,
    color: appColors.placeholder,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
