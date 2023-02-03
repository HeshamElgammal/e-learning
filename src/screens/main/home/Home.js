import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import DrawerView from 'screens/DrawerView';

// import {DrawerActions} from '@react-navigation/native';
import Header from './lib/Header';
import List from './lib/List';
import {appSizes} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Banner} from 'imgs';
import {useEffect} from 'react';
import Search from './lib/Search';

const Home = ({navigation}) => {
  useEffect(() => {
    rotation.value = withRepeat(withTiming(5), 4, true);
  }, []);

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });
  return (
    <DrawerView
      navigation={navigation}
      // style={styles.container}
      titleHeader="E-Learning">
      {/* <ScrollView style={{}} nestedScrollEnabled> */}
      <View style={styles.container}>
        <Header />
        <Search />
        <View style={styles.mainContainer}>
          <Animated.Image
            style={[styles.imgBanner, animatedStyle]}
            source={Banner}
            resizeMethod="resize"
            resizeMode="cover"
          />
        </View>
        <List page="CourseInfo" title="Our Courses" />
        {/* <List page="Quizes" title="Our Quizes" /> */}
      </View>
      {/* </ScrollView> */}
    </DrawerView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // alignItems: 'center',
    // backgroundColor: '#f00',
    // paddingLeft: appSizes.padding_m,
  },
  imgBanner: {
    width: appSizes.with / 1.6,
    height: '100%',
    // alignSelf: 'flex-start',
    alignSelf: 'center',
  },
  mainContainer: {
    width: '90%',
    height: RFValue(100),
    borderRadius: RFValue(10),
    overflow: 'hidden',
    backgroundColor: '#eee',
    alignItems: 'center',
    alignSelf: 'center',
    // marginLeft: appSizes.spacing_m,
  },
});
