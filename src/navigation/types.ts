import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { IProduct } from '../api/mainApi';

export type TabNavigatorParamList = {
  Dashboard: undefined;
  SearchScreen: undefined;
  TrendScreen: undefined;
  ProfileScreen: undefined;
  OrderScreen: undefined;
};

export type HomeStackParamList = {
  TabNavigator: NavigatorScreenParams<TabNavigatorParamList>;
  ItemDetailsScreen: {data: IProduct};
};

export type RootStackParamList = {
  HomeNavigator: NavigatorScreenParams<HomeStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type HomeScreenNavigationType<
  RouteName extends keyof HomeStackParamList,
> = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, RouteName>,
  NativeStackNavigationProp<TabNavigatorParamList, 'Dashboard'>
>;
