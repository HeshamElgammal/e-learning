import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../theme/colorTheme';

const OrDividor = ({title, subTitle, press}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerDividor}>
        <View style={styles.dividor} />
        <Text style={styles.title(appColors.primary)}>Or</Text>
        <View style={styles.dividor} />
      </View>
    
      <Text
        style={[
          styles.title(appColors.blue),
          {alignSelf: 'center', marginTop: 10, fontSize: 15},
        ]}>
        {title}
        {'   '}
        <Text
          style={[
            styles.title(appColors.placeholder),
            {textDecorationLine: 'underline'},
          ]}
          onPress={press}>
          {subTitle}
        </Text>
      </Text>
      
    </View>
  );
};

export default OrDividor;

const styles = StyleSheet.create({
  container: {width: '100%',marginBottom:30},
  containerDividor: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 15,
  },
  dividor: {
    width: '44%',
    borderBottomWidth: 0.7,
    borderColor: appColors.primary,
  },
  title: color => ({
    color: color,
    fontSize: 18,
  }),
  

});
