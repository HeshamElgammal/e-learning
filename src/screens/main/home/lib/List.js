import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors, appSizes} from '../../../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Arabic, English, Math, Programming, Web} from '../../../../assets/imgs';
import {UnderLine} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
const list = [
  {title: 'Programming', color: appColors.blue, icon: Programming},
  {title: 'Web', color: appColors.placeholder, icon: Math},
  {title: 'Arabic', color: appColors.fifth, icon: Arabic},
  {title: 'English', color: appColors.fourth, icon: English},
  {title: 'Math', color: appColors.blue, icon: Programming},
  {title: 'Commonucation Skills', color: appColors.placeholder, icon: Math},
];
const List = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderItem(item.color)}
        key={`index ${index}`}
        onPress={() => {
          navigate('CourseInfo');
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
        Our Courses
      </Text>
      <UnderLine />
      <FlatList
        numColumns={2}
        renderItem={renderItem}
        data={list}
        style={{
          height: appSizes.height / 1.55,
          width: '100%',
        }}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: appSizes.spacing_s,
    marginBottom: RFValue(10),
    alignSelf: 'flex-start',
    // height: RFValue(200),
  },
  titlee: color => ({
    fontSize: 25,
    color: color,
    marginLeft: appSizes.padding_l,
    marginBottom: appSizes.spacing_m,
  }),
  renderItem: color => ({
    width: appSizes.with / 2.3,
    height: RFValue(170),
    backgroundColor: color,
    marginLeft: appSizes.spacing_m,
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
  },
});
