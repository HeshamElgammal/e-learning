import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

import {RnSpinner} from 'components/spinner/Spinner';
import {List as ListIcon} from 'svgs';
import {appColors, appSizes, Fonts} from 'theme';
import {useRoute} from '@react-navigation/native';
import List from './lib/list';
import DrawerView from 'screens/DrawerView';
import {questions} from 'mock/Dumy';
import {RFValue} from 'react-native-responsive-fontsize';
import {CustomBtnAuth} from 'components';

const Quizes = ({navigation, route}) => {
  const {params} = useRoute();
  const [Loading, setLoading] = React.useState(true);
  const [Questions, setQuestions] = React.useState(questions);
  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(0);
  const [wait, setWait] = React.useState(false);
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading(true);
    };
  }, [navigation, params?.quize?.title]);

  const content = useMemo(
    () => (
      <Animatable.View
        useNativeDriver
        delay={1000}
        animation="fadeIn"
        style={[styles.container2]}>
        <List data={Questions} setQuestions={setQuestions} />
      </Animatable.View>
    ),
    [navigation, route, params?.quize?.title, Questions],
  );
  if (Loading) {
    return <RnSpinner />;
  }

  return (
    <>
      <DrawerView
        style={[styles.container1]}
        titleHeader={params.quize.title}
        hideDrawer={true}>
        <View style={styles.TimerContainer}>
          {minutes === 0 && seconds === 0 ? null : (
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: Fonts.PoppinsRegular,
                fontSize: appSizes.l,
              }}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          )}
        </View>

        {content}
        <CustomBtnAuth
          title="SUBMIT"
          formikProps={{
            handleSubmit: () => {
              navigation.navigate('Home');
            },
            isSubmitting: false,
          }}
          style={styles.btn}
        />
      </DrawerView>
    </>
  );
};

export default Quizes;

const styles = StyleSheet.create({
  container1: {
    // flex: 0.8,
    width: '100%',
    height: '100%',
    backgroundColor: appColors.white,
    alignItems: 'center',
  },
  container2: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: appColors.white,
    // backgroundColor:"#f00"
  },
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    // borderBottomWidth: 0.2,
    borderBottomColor: appColors.input,
    // elevation:3
  },
  iconHeader: {
    width: 35,
    height: 40,
    marginLeft: 10,
  },
  titleHeader: {
    color: appColors.primary,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: Fonts.PoppinsMedium,
  },
  TimerContainer: {
    width: RFValue(110),
    height: RFValue(50),
    backgroundColor: appColors.primary,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: RFValue(50),
    zIndex: 1000,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  btn: {
    width: appSizes.with / 1.1,
    borderRadius: appSizes.spacing_s,
  },
});
