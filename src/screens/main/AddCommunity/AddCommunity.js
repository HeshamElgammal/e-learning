import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import DrawerView from 'screens/DrawerView';
import {useNavigation} from '@react-navigation/native';
import {Plus} from 'svgs';
import {pickImage} from './functions/pickImg';
import {appColors, appSizes} from 'theme';
import {CustomBtnAuth, CustomTextInput} from 'components';
import { ScrollView } from 'react-native';

const AddCommunity = () => {
  const navigation = useNavigation();
  const [banner, setBanner] = React.useState({});
  const [photo, setPhoto] = React.useState({});
  const [data, setData] = React.useState({
    title: '',
    description: '',
  });
  return (
    <DrawerView navigation={navigation} titleHeader="Create Community">
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
        >
      <View style={styles.container}>
        <Text style={styles.titleBanner}>Add a Community Banner Image</Text>

        <TouchableOpacity
          onPress={() => pickImage(setBanner)}
          style={styles.containerBanner}>
          {banner.uri ? (
            <Image
              style={styles.banner}
              source={{uri: banner.uri}}
              resizeMode="cover"
            />
          ) : (
            <Plus />
          )}
        </TouchableOpacity>
        <CustomTextInput
          placeholder="title..."
          onChangeText={nextValue => {
            setData(prev => ({...prev, title: nextValue}));
          }}
          value={data.title}
          style={styles.inputTitle}
        />
        <Text
          style={{...styles.titleBanner, alignSelf: 'center', marginLeft: 0}}>
          Add a Community Photo
        </Text>
        <TouchableOpacity
          onPress={() => pickImage(setPhoto)}
          style={styles.containerPhoto}>
          {photo.uri ? (
            <Image
              style={styles.photo}
              source={{uri: photo.uri}}
              resizeMode="cover"
            />
          ) : (
            <Plus />
          )}
        </TouchableOpacity>
        <CustomTextInput
          placeholder="description..."
          onChangeText={nextValue => {
            setData(prev => ({...prev, description: nextValue}));
          }}
          value={data.description}
          style={styles.inputDescription}
          multiline={true}
          numberOfLines={8}
        />
        <CustomBtnAuth
          title="SUBMIT"
          formikProps={{
            handleSubmit: () => {
              navigation.navigate('Home');
            },
            isSubmitting: false,
          }}
          style={styles.btn}
        />
      </View>
      </ScrollView>
    </DrawerView>
  );
};

export default AddCommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#f00"
  },
  containerBanner: {
    backgroundColor: '#234',
    width: appSizes.with / 1.1,
    height: 167,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  banner: {
    width: appSizes.with / 1.1,
    height: 167,
    borderRadius: 10,
  },
  containerPhoto: {
    backgroundColor: '#234',
    width: 157,
    height: 157,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 157 / 2,
    marginTop: 11,
  },
  titleBanner: {color: '#272727', paddingHorizontal: '1%', paddingTop: 30},
  photo: {width: 157, height: 157, borderRadius: 157 / 2},
  inputTitle: {
    width: appSizes.with / 1.1,
    borderRadius: appSizes.spacing_s,
    height: 50,
    borderWidth: 0.5,
    marginTop: 30,
    color: appColors.input,
    // marginLeft: '5%',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  inputDescription: {
    width: appSizes.with / 1.1,
    borderRadius: appSizes.spacing_s,
    height: 120,
    borderWidth: 0.5,
    marginTop: 30,
    color: appColors.input,
    // marginLeft: '5%',
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  btn:{
    width: appSizes.with / 1.1,
    borderRadius: appSizes.spacing_s,
  }
});
