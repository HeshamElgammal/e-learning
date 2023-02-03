import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchBar} from '@rneui/base';
import {appColors, appSizes} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon, Input} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {changeSearch} from 'src/redux/actions/GeneralActions/searchAction';
import {useNavigation} from '@react-navigation/native';
const Searchbar = () => {
  const {navigate} = useNavigation();
  const search = useSelector(state => state.general.search);

  const dispatch = useDispatch();
  const textInputRef = React.useRef();
  const renderIcon = props => {
    return <Icon {...props} name="search" />;
  };
  const _handleSubmit = () => {
    // navigate('Search');
  };
  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        placeholder="Search for a course or community"
        size="large"
        accessoryRight={renderIcon}
        onChangeText={nextValue => dispatch(changeSearch(nextValue))}
        ref={textInputRef}
        placeholderTextColor={appColors.placeholder}
        containerStyle={styles.containerStyle}
        onSubmitEditing={_handleSubmit}
        inputContainerStyle={styles.inputContainerStyle}
        allowFontScaling={false}
        inputStyle={styles.inputStyle}
        keyboardType="default"
        cancelButtonProps={() => dispatch(changeSearch(''))}
        cursorColor={appColors.placeholder}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: appSizes.with / 1.1,
    height: RFValue(50),
    // backgroundColor: '#456',
    alignSelf: 'center',
  },
  containerStyle: {
    width: appSizes.with / 1.1,
    alignSelf: 'center',
    // marginTop: 12,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#ECECEC',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    overflow: 'hidden',
    alignItems: 'center',
  },
  inputStyle: {
    color: appColors.primary,
    //   marginTop:5,
    fontSize: appSizes.m + 2,
  },
  inputContainerStyle: {
    backgroundColor: '#ECECEC',
    width: appSizes.with / 1.15,
    height: 32,
    borderRadius: 5,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',

    color: '#8F9BB3',
  },
});
