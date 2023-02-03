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

import {useNavigation} from '@react-navigation/native';

const List = ({data, setQuestions}) => {
  const {navigate} = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <View
        style={[styles.renderItem(), {marginRight: appSizes.spacing_m}]}
        key={`index ${index}`}>
        <Text style={styles.titleItem} numberOfLines={1}>
          {item.title}
        </Text>
        {item.answers.map((ans, indx) => (
          <>
            <TouchableOpacity
              style={[
                styles.btnAnswer,
                {
                  backgroundColor: ans.selected
                    ? appColors.blue
                    : appColors.white,
                  // ans.selected
                  //   ? ans.selected == ans.right
                  //     ? appColors.blue
                  //     : appColors.error
                  //   : appColors.white,
                },
              ]}
              onPress={() => {
                let newData = [...data];
                newData[index].answers.map((a, n) => {
                  newData[index].answers[n].selected = false;
                });
                newData[index].answers[indx].selected =
                  !newData[index].answers[indx].selected;
                setQuestions([...newData]);
              }}>
              <Text style={styles.titlee()}>{`${
                indx + 1 + ')   ' + ans.answer
              }`}</Text>
            </TouchableOpacity>
          </>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        nestedScrollEnabled
        renderItem={renderItem}
        data={data}
        style={{
          width: '100%',
          marginTop:RFValue(50)
          // backgroundColor:"#f00"
        }}
        contentContainerStyle={{
          paddingBottom: 120,
          width: '100%',
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
    // alignSelf: 'flex-start',
    // height: RFValue(200),
  },
  titlee: color => ({
    fontSize: appSizes.l,
    color: color ?? appColors.placeholder,
    // marginLeft: appSizes.padding_l,
    // marginBottom: appSizes.spacing_m,
    fontFamily: Fonts.PoppinsBoldItalic,
  }),
  renderItem: color => ({
    width: '100%',
    minHeight: RFValue(170),
    backgroundColor: '#F2f3f4',
    // marginLeft: appSizes.spacing_m,
    // marginRight: appSizes.spacing_m,
    marginBottom: appSizes.spacing_s,
    borderRadius: RFValue(20),
    alignItems: 'center',
    borderRadius: 5,
  }),
  icon: {
    width: RFValue(100),
    height: RFValue(100),
    marginTop: appSizes.spacing_s,
  },
  titleItem: {
    fontSize: RFValue(18),
    color: appColors.primary,
    marginTop: RFValue(10),
    fontFamily: Fonts.PoppinsRegular,
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    height: RFValue(180),
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAnswer: {
    width: '90%',
    height: 50,
    backgroundColor: appColors.white,
    marginBottom: 5,
    justifyContent: 'center',
    paddingHorizontal: '2%',
    borderRadius: 5,
  },
});
