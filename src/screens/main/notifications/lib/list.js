import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {Notifs} from 'mock';
import {NOTIFICATION} from 'svgs';
import {appColors, appSizes, Fonts} from 'theme';
import {Input, Icon} from '@ui-kitten/components';

const List = () => {
  const Item = ({item}) => {
    return (
      <>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.containerItem}>
          <View style={styles.titleContainer}>
            {item.show && <View style={styles.circle} />}
            <Text style={{...styles.mainTitle}}>{item.title}</Text>
          </View>
          {item.show && (
            <TouchableOpacity style={styles.ViewContainer}>
              <Icon name="eye" fill={appColors.white} style={styles.icon} />
              <Text style={styles.titleView}>VIEW</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.dividor} />
      </>
    );
  };
  return (
    <FlatList
      data={Notifs}
      ListEmptyComponent={() => {
        return (
          <>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor:"#a00",
                marginTop: appSizes.height / 3.5,
              }}>
              <NOTIFICATION
                // scaleX={0.75}
                // scaleY={0.75}
                style={{
                  alignSelf: 'center',
                  marginBottom: 30,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: appColors.primary,
                  fontFamily: Fonts.PoppinsRegular,
                }}>
                No Notifications Yet
              </Text>
            </View>
          </>
        );
      }}
      contentContainerStyle={{}}
      keyExtractor={item => item?.id}
      renderItem={Item}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  containerItem: {
    // backgroundColor: appColors.input,
    width: appSizes.with,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  dividor: {
    width: appSizes.with,
    height: .8,
    backgroundColor: appColors.six,
    marginBottom: 14,
  },
  titleContainer: {
    maxWidth: appSizes.with / 1.5,
    textAlign: 'flex-start',
    height: '100%',
    alignSelf: 'flex-start',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ViewContainer: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: appColors.whiteBlue,
    height: 35,
    borderRadius: 5,
    marginTop:10
  },
  titleView: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    color: appColors.white,
    fontWeight: '700',
  },
  mainTitle: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 15,
    color: appColors.input,
    fontWeight: '600',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: appColors.whiteBlue,
    marginRight: 10,
    marginTop: 8,
  },
  date: {
    position: 'absolute',
    right: 20,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 15,
    color: appColors.six,
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
