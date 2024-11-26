import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import React, {useEffect, useState} from 'react';
import HomeNavigator from './HomeNavigator';
import SplashScreen from '../components/misc/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
      setLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      </Stack.Navigator>
    );
  }
};

export default RootNavigator;
