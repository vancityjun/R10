import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import FavoritesScreen from '../screens/Favorites';
import Session from '../screens/Session';
import {sharedNavigationOptions} from './config';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

Icon.loadFont();

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const FavesStack = createStackNavigator(
  {
    Faves: FavoritesScreen,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

// Dedicated stacks for Schedule and Faves will go here too!

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'Schedule') {
    iconName = faHeart;
  } else if (routeName === 'Faves') {
    iconName = faHeart;
  }

  // You can return any component that you like here!
};

export default createBottomTabNavigator(
  {
    Schedule: {screen: ScheduleStack},
    Faves: {screen: FavesStack},
    Map: {screen: MapStack},
    About: {screen: AboutStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({color, size}) => {
        // getTabBarIcon(navigation, focused, tintColor);
        <Icon name="ios-heart" size={20} color="#dd3333" />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
    },
  },
);
