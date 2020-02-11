//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

export default client;
