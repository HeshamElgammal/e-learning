import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {appColors} from '../theme/colorTheme';
import Header from './lib/header';
import {
  Activity,
  HomeIcon,
  List,
  Logout,
  Notification,
  Setting,
} from '../assets/imgs';
import {useDispatch} from 'react-redux';
import {changeAuth} from '../redux/actions/AuthActions/changeAuth';
import {AUTHENTICATIONS} from '../utils/config';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
const CustomDrawer = ({style, navigation}) => {
  const dispatch = useDispatch();
  const list = [
    {label: 'Home', icon: HomeIcon},
    {label: 'Settings', icon: Setting},
    {label: 'Activities', icon: Activity},
    {label: 'Notifications', icon: Notification},
    {label: 'Communities', icon: List},
  ];
  const list2 = ['React', 'AI', 'Skills', 'Languages', 'Data'];
  const [selected, setSelected] = useState({page: 0, tetorial: null});
  const drawerProgres = useDrawerProgress();
  const ViewStyle = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgres.value, [0, 1], [-200, 0]);
    return {
      transform: [{translateX}],
    };
  });
  const ViewStyle2 = type =>
    useAnimatedStyle(() => {
      const val = type === 'top' ? -100 : 100;
      const translateY = interpolate(drawerProgres.value, [0, 1], [val, 0]);
      return {
        transform: [{translateY}],
      };
    });
  return (
    <Animated.View style={styles.conatiner}>
      <Header ViewStyle2={ViewStyle2} />
      <DrawerContentScrollView
        style={[
          styles.section,
          {
            backgroundColor: 'transparent',
          },
        ]}>
        <Animated.View style={[styles.section, ViewStyle]}>
          <View style={styles.headerSection}>
            <Text style={[styles.titleHeader, {color: '#444'}]}>Screens</Text>
          </View>
          <FlatList
            data={list}
            renderItem={({item, index}) => (
              <>
                <TouchableOpacity
                  style={[
                    styles.itemContainer,
                    {
                      backgroundColor:
                        selected.page == index
                          ? appColors.fifth
                          : appColors.white,
                    },
                  ]}
                  key={index}
                  onPress={() => {
                    setSelected(prev => ({...prev, ['page']: index}));
                    setSelected(prev => ({...prev, ['tetorial']: null}));

                    navigation.navigate(item.label);
                  }}>
                  <Image style={styles.imgIcon} source={item.icon} />
                  <Text style={styles.titleItem}>{item.label}</Text>
                </TouchableOpacity>
              </>
            )}
          />
        </Animated.View>
        <Animated.View style={[styles.section, {marginTop: 8}, ViewStyle]}>
          <View style={styles.headerSection}>
            <Text style={[styles.titleHeader, {color: '#444'}]}>
              My Communities
            </Text>
          </View>
          <FlatList
            data={list2}
            renderItem={({item, index}) => (
              <>
                <TouchableOpacity
                  style={[
                    styles.itemContainer,
                    {
                      backgroundColor:
                        selected.tetorial == index
                          ? appColors.fifth
                          : appColors.white,
                    },
                  ]}
                  key={index}
                  onPress={() => {
                    setSelected(prev => ({...prev, ['tetorial']: index}));
                    setSelected(prev => ({...prev, ['page']: null}));
                    navigation.navigate('Community');
                  }}>
                  <Image
                    style={[
                      styles.imgIcon,
                      {
                        borderRadius: RFValue(30),
                        width: RFValue(30),
                        height: RFValue(30),
                      },
                    ]}
                    source={{uri: 'https://picsum.photos/1850/800'}}
                  />
                  <Text style={styles.titleItem}>{item}</Text>
                </TouchableOpacity>
              </>
            )}
          />
        </Animated.View>
      </DrawerContentScrollView>
      <Animated.View
        style={[
          ViewStyle2('buttom'),
          styles.footer,
          {backgroundColor: '#999'},
        ]}>
        <TouchableOpacity
          onPress={() => {
            dispatch(changeAuth(AUTHENTICATIONS.NOT_AUTHENTICATED));
          }}
          style={[
            styles.footer,
            {backgroundColor: appColors.fifth, paddingLeft: '10%'},
          ]}>
          <Image style={[styles.imgIcon]} source={Logout} />

          <Text style={[styles.titleItem, {color: appColors.primary}]}>
            Log out
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginLeft: 10,
    paddingBottom: 22,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: appColors.white,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  titleHeader: {
    color: appColors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#FFFF',
    marginVertical: 3,
    borderRadius: 10,
    paddingBottom: 22,
    height: height * 0.35,
  },
  headerSection: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.primary,
  },
  itemContainer: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    // backgroundColor: '#eee',
    marginVertical: 3,
    borderRadius: 5,
    justifyContent: 'flex-start',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleItem: {
    color: appColors.input,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingLeft: '10%',
    backgroundColor: '#ffff',
    marginTop: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#',
    borderRadius: 20,
    flexDirection: 'row',
  },
  imgIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
