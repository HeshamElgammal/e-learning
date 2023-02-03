import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/navigation/Root';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store, persistor} from './src/redux/store';
import {appColors} from './src/theme/colorTheme';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CostumApp />
      </PersistGate>
    </Provider>
  );
};

const CostumApp = () => {
  const theme = useSelector(state => state.general.theme);
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: appColors.white}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#061721'}
        animated={true}
      />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <NavigationContainer
          fallback={<Text style={{color: appColors.white}}>Loading...</Text>}>
          <Root />
        </NavigationContainer>
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
