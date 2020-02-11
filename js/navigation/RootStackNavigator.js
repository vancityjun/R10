import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import About from '../screens/About';
import NavigationLayout from './NavigationLayout';

const RootStackNavigator = createAppContainer(NavigationLayout);

export default RootStackNavigator;
