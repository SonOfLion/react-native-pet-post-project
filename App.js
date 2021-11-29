import React, { useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigate from './navigate';

import { globalStyle } from './styles/styles';

const fonts = () => Font.loadAsync({
  'ka-bold': require('./assets/fonts/Kanit-Bold.ttf'),
  'ka-light': require('./assets/fonts/Kanit-Light.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={globalStyle.main}>
        <Navigate />
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
};
