import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import FavoritesScreen from '../screens/Favorites';
import Session from '../screens/Session';
import {sharedNavigationOptions} from './config';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from '../components/Drawer';

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

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Faves: FavesStack,
    Map: MapStack,
    About: AboutStack,
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
            iconName = 'md-heart';
            break;
          case 'Map':
            iconName = 'md-map';
            break;
          case 'Schedule':
            iconName = 'md-calendar';
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
