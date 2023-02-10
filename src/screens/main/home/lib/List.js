import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors, appSizes, Fonts} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Arabic, English, Math, Programming, Web} from 'imgs';
import {UnderLine} from 'components';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
const list = [
  {
    title: 'Programming',
    color: appColors.blue,
    icon: Programming,
    time: '3:20:0',
  },
  {title: 'Web', color: appColors.placeholder, icon: Math, time: '3:10:0'},
  {title: 'Arabic', color: appColors.fifth, icon: Arabic, time: '1:00:0'},
  {title: 'English', color: appColors.fourth, icon: English, time: '2:20:0'},
  {title: 'Math', color: appColors.blue, icon: Programming, time: '5:10:10'},
  {
    title: 'Commonucation Skills',
    color: appColors.placeholder,
    icon: Math,
    time: '3:0:0',
  },
];
const List = props => {
  const {navigate} = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderItem(item.color),
          // {marginRight: index % 2 == 0 ? appSizes.spacing_m : 0},
          {marginRight: appSizes.spacing_m},
        ]}
        key={`index ${index}`}
        onPress={() => {
          navigate(props.page, {course: item});
        }}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.titleItem} numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.titlee(appColors.primary), {marginBottom: 0}]}>
        {props.title}
      </Text>
      <UnderLine />
      <FlatList
        // numColumns={2}
        nestedScrollEnabled
        alwaysBounceHorizontal
        horizontal
        renderItem={renderItem}
        data={list}
        style={{
          // height: appSizes.height / 1.55,
          width: '100%',
          // justifyContent:"space-between"
        }}
        contentContainerStyle={{
          paddingBottom: 0,
          // flex:1
          marginLeft:appSizes.spacing_m

        }}
      />
      {/* <ScrollView
        // nestedScrollEnabled
        style={{width: '100%', height: RFValue(180), paddingTop: 5}}
        horizontal>
        <View style={styles.listContainer}>
          {list.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.renderItem(item.color),
                // {marginRight: index % 2 == 0 ? appSizes.spacing_m : 0},
                {marginRight: appSizes.spacing_m},
              ]}
              key={`index ${index}`}
              onPress={() => {
                navigate(props.page, {course: item});
              }}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.titleItem} numberOfLines={1}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    marginTop: appSizes.spacing_s-2,
    marginBottom: RFValue(0),

    // alignSelf: 'flex-start',
    // height: RFValue(200),
  },
  titlee: color => ({
    fontSize: 25,
    color: color,
    // marginLeft: appSizes.padding_l,
    marginBottom: appSizes.spacing_m,
    fontFamily: Fonts.PoppinsMedium,
    marginLeft:appSizes.spacing_m

  }),
  renderItem: color => ({
    width: RFValue(170),
    height: RFValue(170),
    backgroundColor: color,
    // marginLeft: appSizes.spacing_m,
    // marginRight: appSizes.spacing_m,
    marginBottom: appSizes.spacing_s,
    borderRadius: RFValue(20),
    alignItems: 'center',
  }),
  icon: {
    width: RFValue(100),
    height: RFValue(100),
    marginTop: appSizes.spacing_s,
  },
  titleItem: {
    fontSize: RFValue(18),
    color: appColors.white,
    marginTop: RFValue(10),
    fontFamily: Fonts.PoppinsRegular,
  },
  listContainer: {
    width: appSizes.with,
    height: RFValue(180),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"#466"
  },
});
