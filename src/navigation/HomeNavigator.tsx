import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './types';
import React from 'react';
import TabNavigator from './TabNavigator';
import ItemDetailsScreen from '../screens/Product/ItemDetailsScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
