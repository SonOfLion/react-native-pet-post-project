import React from 'react';
import MainPage from './components/MainPage';
import Contacts from './components/Contacts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={
            {
              title: 'Main page',
              headerStyle: { backgroundColor: '#ff00c3', height: 40 },
              headerTitleStyle: { fontWeight: '400' }
            }
          }
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={
            {
              title: 'Information page',
              headerStyle: { backgroundColor: '#ff00c3', height: 40 },
              headerTitleStyle: { fontWeight: '400' }
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
