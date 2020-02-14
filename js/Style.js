import React from 'react';
// import {View, Text, StyleSheet, Image} from 'react-native';
import styled from 'styled-components';

export const MediumGrey = '#999';
export const LightGrey = '#e6e6e6';
export const Blue = '#8797D6';
export const Purple = '#9963ea';
export const Red = '#cf392a';

export const Title = styled.Text`
  font-size: 34px;
  margin: 20px 0;
  font-family: 'Montserrat-Regular';
`;
export const Desc = styled.Text`
  font-size: 22px;
  line-height: 30px;
  font-family: 'Montserrat-Light';
`;
export const List = styled.Text`
  color: ${Purple};
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Montserrat-Regular';
`;
export const Wrapper = styled.View`
  padding: 0 20px;
  background: #fff;
  height: 100%;
`;

export const Img = styled.Image`
  border-radius: '100%';
`;

export const SpaceBetween = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileImg = styled.View`
  width: 80;
  height: 80;
  border-radius: 100;
  overflow: hidden;
`;

export const TextGrey = styled.Text`
  color: ${MediumGrey};
  font-size: 18;
  font-family: 'Montserrat-Regular';
`;
