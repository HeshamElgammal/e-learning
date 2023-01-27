import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {appColors, appSizes, Fonts} from 'theme';

const Info = props => {
  const {course} = props;
  const [isShow, updateShow] = React.useState(false);

  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  return (
    <View style={styles.container}>
      
      <Text
        style={[
          styles.title,
          {
            fontWeight: '700',
            textDecorationLine: 'underline',
            color: appColors.black,
          },
        ]}>
        About this course{' '}
      </Text>
      <Text style={[styles.title, {marginTop: 5}]}>
        {isShow ? text : text.slice(0, 200)}
      </Text>
      <Text
        style={[
          styles.title,
          {textAlign: 'center', textDecorationLine: 'underline'},
        ]}
        onPress={() => {
          updateShow(prev => !prev);
        }}>
        {isShow ? 'Show less' : 'Show more'}
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: RFValue(300),
    // backgroundColor: '#f00',
  },
  title: {
    color: appColors.input,
    marginTop: appSizes.spacing_s,
    fontWeight: '600',
    fontSize: appSizes.l - 5,
    lineHeight: 25,
    fontFamily: Fonts.PoppinsBoldItalic,

  },
  img: {
    width: appSizes.with / 1.1,
    height: RFValue(200),
    // backgroundColor:"#a98",
    borderRadius: appSizes.spacing_s,
  },
});
