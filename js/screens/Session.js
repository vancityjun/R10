import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Speaker from '../components/Speaker';
import {Img} from '../Style';
import {FavesContext} from '../context';
import GradientButton from '../components/GradientButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Wrapper,
  SpaceBetween,
  ProfileImg,
  TextGrey,
  Red,
  Title,
} from '../Style';
import styled from 'styled-components';

const TouchableOpacityFlex = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

Icon.loadFont();
const Session = ({navigation}) => {
  const {removeFaveToState, addFaveToState, isFave} = useContext(FavesContext);

  const [data] = useState(navigation.getParam('item'));
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Wrapper>
      <SpaceBetween style={{marginTop: 20}}>
        <TextGrey style={{fontSize: 20}}>{data.location}</TextGrey>
        {isFave(data.id) ? (
          <Icon name="ios-heart" size={20} color={Red} />
        ) : null}
      </SpaceBetween>
      <Title>{data.title}</Title>
      <Text style={{fontSize: 20, color: Red}}>{data.startTime}</Text>
      <Text style={styles.description}>{data.description}</Text>
      {data.speaker ? (
        <>
          <TextGrey style={{marginTop: 20}}>Presented by:</TextGrey>
          <TouchableOpacityFlex onPress={() => handleModal()}>
            <ProfileImg>
              <Image
                style={{width: 80, height: 80}}
                source={{uri: data.speaker.image}}
              />
            </ProfileImg>
            <Text style={styles.speakerName}>{data.speaker.name}</Text>
          </TouchableOpacityFlex>
          <Speaker
            modalVisible={modalVisible}
            onChange={handleModal}
            speaker={data.speaker}
          />
        </>
      ) : null}
      {isFave(data.id) ? (
        <GradientButton
          title={'Remove From Faves'}
          onPress={() => removeFaveToState(data.id)}
        />
      ) : (
        <GradientButton
          title={'Add To Faves'}
          onPress={() => addFaveToState(data.id)}
        />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  speakerName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    marginLeft: 20,
  },
  description: {
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
    marginTop: 20,
  },
});

export default Session;
