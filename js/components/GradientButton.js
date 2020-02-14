//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Blue, Purple} from '../Style';
// create a component
const GradientButton = ({title, onPress}) => {
  return (
    <LinearGradient
      colors={[Purple, Blue]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.button}>
      <Text onPress={() => onPress()} style={styles.text}>
        {title}
      </Text>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 200,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

//make this component available to the app
export default GradientButton;
