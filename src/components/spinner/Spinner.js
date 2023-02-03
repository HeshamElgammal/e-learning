import React from 'react';
import {View} from 'react-native';
import {appColors, theme} from 'theme';
import Spinner from 'react-native-spinkit';
import DrawerView from 'screens/DrawerView';

export const RnSpinner = ({size = 'm', color = '#061721'}) => (
  <DrawerView
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appColors.white,
    }}
    titleHeader=""
    hideDrawer={true}
    >
    <Spinner
      style={{
        // position: 'absolute',
        flex: 1,
        transform: [{scaleX: 1}],
        alignSelf: 'center',
        zIndex: 100,
      }}
      isVisible={true}
      size={40}
      type="Bounce"
      color={color}
    />
  </DrawerView>
);
