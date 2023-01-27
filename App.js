import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Root from './src/navigation/Root';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store, persistor} from './src/redux/store';
import {appColors} from './src/theme/colorTheme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView
          style={{flex: 1, backgroundColor: appColors.white}}>
          <NavigationContainer
            fallback={<Text style={{color: appColors.white}}>Loading...</Text>}>
            <Root />
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
