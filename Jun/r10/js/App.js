/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import client from './config';
import {ApolloProvider} from '@apollo/react-hooks';

import About from './screens/About';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FavesProvider from './context';

const App: () => React$Node = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <FavesProvider>
          <StatusBar barStyle="light-content" />
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
