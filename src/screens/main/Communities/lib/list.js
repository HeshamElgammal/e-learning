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
import {appColors, appSizes, Fonts} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {User} from 'svgs';
import {useNavigation} from '@react-navigation/native';

const List = ({data}) => {
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
          navigate('Community', {community: item.title});
        }}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.titleItem} numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const Coms = useMemo(() => {
    return (
      <>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          centerContent={true}
          contentContainerStyle={{
            // backgroundColor: '#f00',
            justifyContent: 'space-between',
            // flexDirection:"row",
            // alignItems: 'center',

            // alignItems: 'space-between',
            width: '90%',
            alignSelf: 'center',
            // height: appSizes.height,
          }}
          nestedScrollEnabled
          style={{alignSelf: 'center', height: appSizes.height}}
        />
      </>
    );
  }, [data]);
  return (
    <>
      <View style={styles.container}>{Coms}</View>
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: appColors.black,
    height: appSizes.height,
    width: appSizes.with,
  },
  listContainer: {
    // width: '90%',
    width: appSizes.with / 1.1,
    marginTop: appSizes.spacing_m,
    height: appSizes.height,
    alignItems: 'center',
    backgroundColor: '#456',
    flex: 1,
  },
  titlee: color => ({
    fontSize: 25,
    color: color,
    // marginLeft: appSizes.padding_l,
    marginBottom: appSizes.spacing_m,
    fontFamily: Fonts.PoppinsBoldItalic,
    marginLeft: appSizes.spacing_m,
  }),
  renderItem: color => ({
    width: '47.5%',
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
