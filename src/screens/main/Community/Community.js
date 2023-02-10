import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';

import {appColors, appSizes} from 'theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useState} from 'react';
import Header from './lib/header';
import HeaderTab from './lib/HeaderTab';
import Courses from './lib/Courses';
import Members from './lib/Members';
import Quizes from './lib/Quizes';

const Community = ({navigation, route}) => {
  const {params} = route;
  const [selectedBar, setSelectedBar] = useState('Courses');
  const [Joined, setJoined] = useState(false);
  return (
    <DrawerView
      navigation={navigation}
      style={styles.container}
      titleHeader={params?.community}>
      <Header Joined={Joined} setJoined={setJoined} />
      <HeaderTab selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
      {selectedBar == 'Courses' && (
        <Courses
          Courses={[
            {
              courseName: 'Ui/Ux',
              time: '3:20:0',
              img: `https://plus.unsplash.com/premium_photo-1661539032823-e60652a0885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'React',
              time: '1:0:0',
              img: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'Flutter',
              time: '1:30:0',
              img: `https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'Node.js',
              time: '0:20:0',
              img: `https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
          ]}
        />
      )}
      {/* {selectedBar == 'Members' && (
        <Members
          Members={[
            {
              member: 'Ahmed',
              img: `https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {member: 'Hesham', img: `https://unsplash.com/photos/9yIWxiSswnQ`},
          ]}
        />
      )} */}
      {selectedBar == 'Quizes' && (
        <Quizes
          quizes={[
            {
              id: 1,
              title: 'react 1',
              time: `${4} minute`,
            },
            {
              id: 2,
              title: 'react 2',
              time: `${5} minute`,
            },
          ]}
        />
      )}
    </DrawerView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {},
});
