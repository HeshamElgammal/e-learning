import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from 'screens/DrawerView';
import {useState} from 'react';
import HeaderTab from './lib/HeaderTab';
import Comunities from './lib/Communities';
import Searchbar from './lib/Search';
import Courses from './lib/Courses';

const Search = () => {
  const [selectedBar, setSelectedBar] = useState('Courses');

  return (
    <DrawerView titleHeader="" hideDrawer={true}>
      <Searchbar />
      <HeaderTab selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
      {selectedBar == 'Courses' && (
        <Courses
          Courses={[
            {
              courseName: 'Ui/Ux',
              time: '3:20:0',
              creator: 'hesham',
              img: `https://plus.unsplash.com/premium_photo-1661539032823-e60652a0885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'React',
              time: '1:0:0',
              creator: 'Ahmed',
              img: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'Flutter',
              time: '1:30:0',
              creator: 'mohamed',
              img: `https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              courseName: 'Node.js',
              time: '0:20:0',
              creator: 'youssef',
              img: `https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
          ]}
        />
      )}

      {selectedBar == 'Comunities' && (
        <Comunities
          comunities={[
            {
              comunityName: 'Ui/Ux',
              creator: 'hesham',
              img: `https://plus.unsplash.com/premium_photo-1661539032823-e60652a0885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              comunityName: 'React',
              creator: 'ahmed',
              img: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              comunityName: 'Flutter',
              creator: 'User',
              img: `https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
            },
            {
              comunityName: 'Node.js',
              creator: 'hesham',
              img: `https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
            },
          ]}
        />
      )}
    </DrawerView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
