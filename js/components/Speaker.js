import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {addFave} from '../config/model';
import GradientButton from '../components/GradientButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileImg, Desc, Title} from '../Style';
import styled from 'styled-components';

const ModalWrap = styled.View`
  margin: 0 15px;
  background: #fff;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const Navigation = styled.View`
  display: flex;
  height: 100px;
  justify-content: center;
`;
const Wrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

Icon.loadFont();

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
      <ScrollView>
        <View style={styles.container}>
          <Navigation>
            <Wrap>
              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Icon
                  onPress={() => handleModal()}
                  name="md-close"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
              <Text style={styles.navigation}>About the Speaker</Text>
            </Wrap>
          </Navigation>
          <ModalWrap>
            <ProfileImg style={{width: 120, height: 120}}>
              <Image
                source={{uri: speaker.image}}
                style={{width: 120, height: 120}}
              />
            </ProfileImg>
            <Title>{speaker.name}</Title>
            <Desc>{speaker.bio}</Desc>
            <GradientButton title="Read More on Wikipedia" onPress={() => {}} />
          </ModalWrap>
        </View>
      </ScrollView>
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
    textAlign: 'center',
  },
});

export default Speaker;
