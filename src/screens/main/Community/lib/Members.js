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
import { User } from 'svgs';

const Members = ({Members}) => {
  const Mems = useMemo(() => {
    return (
      <>
        <FlatList
          data={Members}
          renderItem={({item, index}) => {
            return (
              <>
                <TouchableOpacity style={styles.itemContainer}>
                  {/* <Image
                    source={{uri: 'https://picsum.photos/1850/700'}}
                    style={styles.img}
                  /> */}
                  <User style={styles.img} width={40} height={40}/>
                  <Text style={styles.titleF}>{item.member}</Text>
                  <TouchableOpacity style={styles.btnF}>
                    <Text style={styles.titleF}>Follow</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </>
    );
  }, [Members]);
  return (
    <>
      <View style={styles.listContainer}>{Mems}</View>
    </>
  );
};

export default Members;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: appSizes.spacing_m,
  },
  itemContainer: {
    width: '95%',
    height: RFValue(65),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: appSizes.m,
    backgroundColor: '#eee',
    paddingHorizontal: appSizes.padding_s,
    marginBottom: appSizes.s,
    alignSelf:"center"
  },
  img: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    marginRight: appSizes.spacing_s,
  },
  btnF: {
    position: 'absolute',
    right: 30,
    backgroundColor: appColors.white,
    zIndex: 1000,
    top: 20,
    padding: RFValue(8),
    borderRadius: 5,
  },
  titleF: {
    fontSize: RFValue(12),
    color: appColors.primary,
  },
});
