import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from 'theme/colorTheme';

const Header = ({title, subTitle}) => {
  return (
    <View style={{width: '90%', marginTop: 25, marginBottom: 70}}>
      <Text style={[styles.titlee(appColors.primary), {marginBottom: 10}]}>
        {title}
      </Text>
      <Text style={[styles.titlee(appColors.placeholder)]}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titlee: color => ({fontSize: 20, color: color, marginLeft: 16}),
});
