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
import {appColors, appSizes} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {User} from 'svgs';
import {useNavigation} from '@react-navigation/native';

const Courses = ({Courses}) => {
  const {navigate} = useNavigation();
  const Coursess = useMemo(() => {
    return (
      <>
        <FlatList
          data={Courses}
          contentContainerStyle={{
            paddingBottom: appSizes.height / 2.6,
            // height:"100%"
          }}
          renderItem={({item, index}) => {
            return (
              <>
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => {
                    navigate('CourseInfo', {course: item});
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={styles.img}
                    resizeMethod="resize"
                    resizeMode="cover"
                  />
                  <Text
                    style={[
                      styles.title,
                      {fontWeight: '600', marginLeft: 2},
                    ]}>{`${item.courseName}  -  ${item.time}`}</Text>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      // backgroundColor: '#f00',
                      justifyContent: 'flex-start',
                    }}>
                    <User
                      // source={{uri: 'https://picsum.photos/1850/800'}}
                      width={40}
                      height={40}
                      style={[
                        styles.img,
                        {
                          width: RFValue(30),
                          height: RFValue(30),
                          marginLeft: 0,
                        },
                      ]}
                    />
                    <Text style={styles.title}>Hesham</Text>
                  </View>
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
    width: '95%',
    // height: RFValue(65),
    // alignItems: 'center',
    // flexDirection: 'row',
    borderRadius: appSizes.m,
    backgroundColor: '#eee',
    paddingHorizontal: appSizes.padding_s,
    marginBottom: appSizes.l,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  img: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    borderRadius: appSizes.m,
    marginHorizontal: appSizes.spacing_s,
    marginVertical: appSizes.spacing_s,
  },
  title: {
    fontSize: RFValue(12),
    color: appColors.primary,
    textAlign: 'left',
  },
});
