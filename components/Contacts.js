import React from 'react';
import { View,Text, Image } from 'react-native';

import { globalStyle } from '../styles/styles';

export default function Contacts({ route }) {
  // const nextPage = () => {
  //   navigation.goBack('Main');
  // };

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>{route.params.full}</Text>
      <Image source={{ width: '100%', height: 60, uri: route.params.img }} />
      {/*<Button title={'Open main page'} onPress={nextPage} touchSoundDisabled={false}/>*/}
    </View>
  );
};
