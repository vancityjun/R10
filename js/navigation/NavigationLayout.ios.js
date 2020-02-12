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
import {Platform} from 'react-native';

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
    Faves: {
      screen: FavesStack,
    },
    Map: {screen: MapStack},
    About: {screen: AboutStack},
  },
  {
    defaultNavigationOptions: ({navigation, navigationOptions}) => ({
      tabBarIcon: ({tintColor}) => {
        let iconName;
        const route = navigation.state.routeName;
        // console.log(route);
        switch (route) {
          case 'About':
            iconName = 'md-information-circle';
            break;
          case 'Faves':
            iconName = 'ios-heart';
            break;
          case 'Map':
            iconName = 'ios-map';
            break;
          case 'Schedule':
            iconName = 'ios-calendar';
            break;
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#000',
        height: 70,
        paddingTop: 20,
      },
    },
  },
);
