import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useMemo} from 'react';
import {appColors, appSizes} from '../../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

const Courses = ({Courses}) => {
  const Coursess = useMemo(() => {
    return (
      <>
        <FlatList
          data={Courses}
          renderItem={({item, index}) => {
            return (
              <>
                <TouchableOpacity style={styles.itemContainer}>
                  <Image
                    source={{uri: 'https://picsum.photos/1850/700'}}
                    style={styles.img}
                  />
                  <Text>{item.courseName}</Text>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </>
    );
  }, [Courses]);
  return (
    <>
      <View style={styles.listContainer}>{Coursess}</View>
    </>
  );
};

export default Courses;

const styles = StyleSheet.create({
  listContainer: {
    width: '97%',
    marginTop: appSizes.spacing_m,
  },
  itemContainer: {
    width: '100%',
    height: RFValue(65),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: appSizes.m,
    backgroundColor: appColors.six,
    paddingHorizontal: appSizes.padding_s,
    marginBottom:appSizes.s
  },
  img: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    marginRight: appSizes.spacing_s,
  },
});
