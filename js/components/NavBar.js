import React from 'react';
import {View, Text, StyleSheet, LinearGradient} from 'react-native';
import {Red, Purple} from '../Style';
import styled from 'styled-components';

const Container = styled.View`
  background: ${Red};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavBar = () => {
  return (
    <Container>
      <Text style={styles.heading}>About</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  heading: {
    color: '#fff',
    fontSize: 24,
  },
});

export default NavBar;
