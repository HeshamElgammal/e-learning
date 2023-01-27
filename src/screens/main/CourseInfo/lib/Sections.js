import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListItem} from '@rneui/base';
import {appColors, appSizes} from 'theme';
import {Down, Play} from 'svgs';
import {RFValue} from 'react-native-responsive-fontsize';
const content = [
  {
    title: 'section1',
    lessons: [
      {
        fileName: 'lesson 1',
      },
    ],
  },
  {
    title: 'section2',
    lessons: [
      {
        fileName: 'lessonnnn 1',
      },
    ],
  },
];
const Sections = () => {
  const [isExpanded, updateExpanded] = React.useState(false);
  const [isEnrolled, updateEnrolled] = React.useState(false);
  return (
    <ScrollView style={{width: appSizes.with / 1.1, paddingBottom: 20}}>
      <View
        style={{
          width: appSizes.with / 1.05,
          marginLeft: RFValue(-10),
        }}>
        <Text style={styles.titleHeader}>Course content</Text>
        {content?.map((item, k) => (
          <ListItem.Accordion
            style={{width: '100%'}}
            key={`course_conytent_${k}`}
            content={
              <>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitleSection}>
                    {item?.title}
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={k == isExpanded ? true : false}
            expandIcon={<Down fill="#000" />}
            icon={<Down fill="#000" />}
            onPress={() => {
              k == isExpanded ? updateExpanded(undefined) : updateExpanded(k);
            }}>
            {item?.lessons.map((lesson, key) => (
              <ListItem
                key={`lessons_course${key}`}
                containerStyle={{paddingTop: 0}}>
                {isEnrolled ? <View style={styles.circle} /> : <Play />}
                <ListItem.Content>
                  <ListItem.Title
                    style={styles.listTitle}
                    onPress={() => {
                      console.log('====================================');
                      console.log(lesson);
                      console.log('====================================');
                    }}>
                    {lesson?.fileName}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </ListItem.Accordion>
        ))}
      </View>
    </ScrollView>
  );
};

export default Sections;

const styles = StyleSheet.create({
  listContent: {
    borderWidth: 1,
    height: 34,
    borderColor: appColors.input,
    borderRadius: 5,
    // width: appSizes.with / 1.3,
    paddingHorizontal: 16,
  },
  titleHeader: {
    fontSize: appSizes.l - 5,
    fontWeight: '600',
    marginTop: RFValue(10),
    marginLeft: 16,
    color: appColors.input,
    textDecorationLine: 'underline',
    
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 90,
    borderColor: '#000000',
    borderWidth: 1,
  },
  listTitleSection: {
    fontSize: RFValue(13),
    color: '#272727',
    // fontFamily: fonts.Semi,
  },
  listTitle: {
    fontSize: RFValue(12),
    // fontFamily: fonts.Reg,
    color: '#272727',
  },
});
