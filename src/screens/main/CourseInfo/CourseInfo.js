import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import DrawerView from 'screens/DrawerView';
import Header from './lib/header';
import Btns from './lib/Btns';
import Sections from './lib/Sections';
import Info from './lib/Info';
import {RnSpinner} from 'components/spinner/Spinner';
import {List} from 'svgs';
import {appColors, Fonts} from 'theme';
const CourseInfo = ({navigation, route}) => {
  const [Loading, setLoading] = React.useState(true);
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const {params} = route;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading(true);
    };
  }, [navigation, params?.course?.title]);

  const content = useMemo(
    () => (
      <Animatable.View
        useNativeDriver
        delay={1000}
        animation="fadeIn"
        style={[styles.container2]}>
        <Header
          course={params?.course}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
        {!isFullScreen && (
          <>
            <Btns />
            <Info course={params?.course} />
            <Sections />
          </>
        )}
      </Animatable.View>
    ),
    [navigation, route, params?.course?.title, isFullScreen, setIsFullScreen],
  );
  if (Loading) {
    return <RnSpinner />;
  }

  return (
    <>
      <View style={[styles.container1]}>
        {!isFullScreen && (
          <View style={[styles.header]}>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <List style={styles.iconHeader} width={35} height={40} />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{`${
              params?.course?.title ?? params?.course?.courseName
            }`}</Text>
            <View style={styles.iconHeader} />
          </View>
        )}
        <ScrollView style={{flex: 1, backgroundColor: appColors.white}}>
          {content}
        </ScrollView>
      </View>
    </>
  );
};

export default CourseInfo;

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
});
