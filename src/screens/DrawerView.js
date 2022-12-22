import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Control} from '../assets/imgs';
import { appColors } from '../theme/colorTheme';

const DrawerView = ({children, style, navigation, titleHeader}) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image style={styles.iconHeader} source={Control} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}></Text>
        <View style={styles.iconHeader} />
      </View>
      {children}
    </Animated.View>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  container: {
    // flex: 0.8,
    width: '100%',
    height: '100%',
    backgroundColor: appColors.white,
    alignItems: 'center',
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
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  titleHeader: {
    color: appColors.primary,
    fontSize: 20,
    fontWeight: '600',
  },
});
