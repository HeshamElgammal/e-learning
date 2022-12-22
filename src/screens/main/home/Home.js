import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import DrawerView from '../../DrawerView';
// import {DrawerActions} from '@react-navigation/native';
import Header from './lib/Header';
import List from './lib/List';
import {appSizes} from '../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Banner} from '../../../assets/imgs';
import {useEffect} from 'react';

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
      style={styles.container}
      titleHeader="Home">
      <Header />
      <View style={styles.mainContainer}>
        <Animated.Image
          style={[styles.imgBanner, animatedStyle]}
          source={Banner}
          resizeMethod="resize"
          resizeMode="cover"
        />
      </View>
      <List />
    </DrawerView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  imgBanner: {width: '100%', height: '100%'},
  mainContainer: {
    width: appSizes.with / 1.1,
    height: RFValue(150),
    borderRadius: RFValue(10),
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
});
