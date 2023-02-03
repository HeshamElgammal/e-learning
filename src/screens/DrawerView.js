import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Control} from 'imgs';
import {List} from 'svgs';
import {appColors} from 'theme/colorTheme';
import {appSizes, Fonts} from 'theme';
import {SafeAreaView} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const DrawerView = ({
  children,
  style,

  titleHeader,
  hideDrawer = false,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={[styles.container, {height: appSizes.height}]}>
        <Animated.View
          style={[
            styles.container,
            style,
            {alignItems: 'center', height: appSizes.height},
          ]}>
          <View style={[styles.header]}>
            {hideDrawer == false ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                {/* <Image style={styles.iconHeader} source={Control} /> */}
                <List style={styles.iconHeader} width={35} height={40} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-circle-left"
                  fill={appColors.primary}
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.titleHeader}>{`${titleHeader}`}</Text>
            <View style={styles.iconHeader} />
          </View>
          {children}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  container: {
    // flex: 0.8,
    width: '100%',
    height: '100%',
    backgroundColor: appColors.white,
    // alignItems: 'center',
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
    fontFamily: Fonts.PoppinsBoldItalic,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
