import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamList} from './types';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import React from 'react';
import OrderScreen from '../screens/Order/OrderScreen';
import ProfileScreen from '../screens/Profile/ProflieScreen';
import DashBoardScreen from '../screens/Home/DashBoardScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import TrendsScreen from '../screens/Trends/TrendsScreen';
import {useTheme} from '@shopify/restyle';
import {Box, Text, Theme} from '../lib/theme';
import {verticalScale} from 'react-native-size-matters';
import {SearchIcon} from '../assets/images/search';
import {HomeIcon} from '../assets/images/home';
import {SCREENS} from './screenNames';
import {TrendsIcon} from '../assets/images/trends';
import {OrderIcon} from '../assets/images/order';
import {ProfileIcon} from '../assets/images/profile';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function MyTabBar({state, descriptors, navigation}: any) {
  const theme = useTheme<Theme>();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? verticalScale(60) : verticalScale(50),
        alignItems: 'center',
        backgroundColor: theme.colors.mainBackground,
        ...styles.container,
      }}>
      {state.routes.map(
        (route: {key: string | number; name: any; params: any}, index: any) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const renderLabel = () => {
            if (route.name === 'Dashboard') {
              return 'Home';
            } else if (route.name === 'SearchScreen') {
              return 'Search';
            } else if (route.name === 'TrendScreen') {
              return 'Trends';
            } else if (route.name === 'ProfileScreen') {
              return 'Profile';
            } else if (route.name === 'OrderScreen') {
              return 'Orders';
            }
          };
          const renderIcon = (focused: boolean) => {
            switch (route.name) {
              case 'Dashboard':
                return (
                  <HomeIcon
                    color={focused ? '#12AF37' : '#000'}
                    width={20}
                    height={20}
                  />
                );
              case 'OrderScreen':
                return (
                  <OrderIcon
                    width={20}
                    height={20}
                    color={focused ? '#12AF37' : '#000'}
                  />
                );
              case 'SearchScreen':
                return (
                  <SearchIcon
                    width={20}
                    height={20}
                    color={focused ? '#12AF37' : '#000'}
                  />
                );
              case 'TrendScreen':
                return (
                  <TrendsIcon
                    width={20}
                    height={20}
                    color={focused ? '#12AF37' : '#000'}
                  />
                );
              case 'ProfileScreen':
                return (
                  <ProfileIcon
                    width={20}
                    height={20}
                    color={focused ? '#12AF37' : '#000'}
                  />
                );

              default:
                return (
                  <HomeIcon
                    color={focused ? '#12AF37' : '#000'}
                    width={20}
                    height={20}
                  />
                );
            }
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={0.8}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={`${route}-${index}`}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}>
              <Box
                justifyContent="center"
                alignContent="center"
                alignItems="center">
                {renderIcon(isFocused)}
              </Box>
              <Text
                mt="1.5"
                variant={'base'}
                color={isFocused ? 'primary' : 'gray'}
                fontWeight={isFocused ? '500' : '400'}>
                {renderLabel()}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
      }}>
      {/* @ts-ignore */}
      <Tab.Screen name={'Dashboard'} component={SearchScreen} />
      <Tab.Screen name={'SearchScreen'} component={SearchScreen} />
      <Tab.Screen name={'TrendScreen'} component={TrendsScreen} />
      <Tab.Screen name={'OrderScreen'} component={OrderScreen} />
      <Tab.Screen name={'ProfileScreen'} component={ProfileScreen} />

      {/* @ts-ignore */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1, // Optional: Add a border at the bottom to separate the shadow
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Optional: Border color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2, // Needed for Android
  },
});
