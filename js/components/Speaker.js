import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Image} from 'react-native';
import {addFave} from '../config/model';

import styled from 'styled-components';

const ModalWrap = styled.View`
  margin: 0 15px;
  background: #fff;
  height: 100%;
  border-radius: 10px;
`;
const Navigation = styled.View`
  display: flex;
  height: 100px;
  justify-content: center;
`;
const Wrap = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Speaker = ({onChange, modalVisible, speaker}) => {
  // console.log(speaker);
  const handleModal = () => {
    onChange();
  };
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.container}>
        <Navigation>
          <Wrap>
            <Text style={styles.navigation} onPress={() => handleModal()}>
              close
            </Text>
            <Text style={styles.navigation}>About the Speaker</Text>
          </Wrap>
        </Navigation>
        <ModalWrap>
          <Image
            source={{uri: speaker.image}}
            style={{width: 100, height: 100}}
          />
          <Text>{speaker.name}</Text>
          <Text>{speaker.bio}</Text>
        </ModalWrap>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  navigation: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Speaker;
