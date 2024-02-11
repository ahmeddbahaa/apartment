import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ApartmentsScreen from './src/screens/Apartements';
import ApartmentDetailScreen from './src/screens/ApartmentDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Apartments" component={ApartmentsScreen} options={{headerShown: false}} />
        <Stack.Screen name="ApartmentDetail" component={ApartmentDetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}