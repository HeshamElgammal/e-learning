import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {appColors, appSizes, Fonts} from 'theme';
import {VideoPlay, VideoPlayy} from 'svgs';
import {VideoComponent} from 'components';
// import { VideoPlayy } from 'svgs/svgs';

const Header = props => {
  const {course} = props;

  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.img}
        resizeMode="cover"
        resizeMethod="resize"
      /> */}
      <VideoComponent
        isFullScreen={props?.isFullScreen}
        setIsFullScreen={props?.setIsFullScreen}
      />
      {!props?.isFullScreen && (
        <Text
          style={styles.title}>{`${course?.title}  -  ${course.time}`}</Text>
      )}
      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          top: RFValue(90),
          left: appSizes.with / 2.55,
          zIndex:1000
        }}>
        <VideoPlayy width={50} height={50} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    borderRadius: appSizes.spacing_s,
  },
});
