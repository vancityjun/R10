import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const GradientHeader = props => {
  console.log(props);
  return (
    <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
      <LinearGradient
        colors={['#cf392a', '#9963ea']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[StyleSheet.absoluteFill, {height: 100, width: '100%'}]}
      />
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Icon name="md-menu" size={30} color="#fff" />
      </TouchableOpacity>
      <Header {...props} />
    </View>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
    paddingBottom: 40,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 22,
  },
});

export default GradientHeader;
