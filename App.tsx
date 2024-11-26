/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import theme, {darkTheme} from './src/lib/theme';
import { QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}

      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar translucent />
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>

      {/* </GestureHandlerRootView> */}
    </ThemeProvider>
  );
}

export default App;
