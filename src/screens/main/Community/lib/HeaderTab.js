import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {appColors, appSizes} from '../../../../theme';

const HeaderTab = ({selectedBar, setSelectedBar}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn(selectedBar, 'Courses')}
          onPress={() => {
            setSelectedBar('Courses');
          }}>
          <Text style={styles.title(selectedBar, 'Courses')}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn(selectedBar, 'Quizes')}
          onPress={() => {
            setSelectedBar('Quizes');
          }}>
          <Text style={styles.title(selectedBar, 'Quizes')}>Quizes</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.btn(selectedBar, 'Members')}
          onPress={() => {
            setSelectedBar('Members');
          }}>
          <Text style={styles.title(selectedBar, 'Members')}>Members</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  container: {
    width: '94%',
    height: RFValue(45),
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: appSizes.spacing_s,
    overflow: 'hidden',
    paddingHorizontal: appSizes.padding_m,
    paddingVertical: 5,
  },
  btn: (selectedBar, bar) => ({
    // width: '30%',
    flex:1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: appSizes.spacing_s,
    borderColor: '#999',
    borderWidth: selectedBar == bar ? 0.6 : 0,
    backgroundColor: selectedBar == bar ? appColors.primary : '#eee',
  }),
  title: (selectedBar, bar) => ({
    color: selectedBar == bar ? appColors.white : appColors.placeholder,
  }),
});
