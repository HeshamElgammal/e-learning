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
import {List} from 'svgs';
import {appColors, Fonts} from 'theme';
import {useRoute} from '@react-navigation/native';

const Quizes = ({navigation, route}) => {
  const {params} = useRoute();
  const [Loading, setLoading] = React.useState(true);

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
        style={[styles.container2]}></Animatable.View>
    ),
    [navigation, route, params?.course?.title],
  );
  if (Loading) {
    return <RnSpinner />;
  }

  return (
    <>
      <View style={[styles.container1]}>
        <View style={[styles.header]}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <List style={styles.iconHeader} width={35} height={40} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>{`${params?.course?.title}`}</Text>
          <View style={styles.iconHeader} />
        </View>
        <ScrollView style={{flex: 1, backgroundColor: appColors.white}}>
          {content}
        </ScrollView>
      </View>
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
    fontFamily: Fonts.PoppinsBoldItalic,
  },
});
