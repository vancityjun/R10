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
import Icon from 'react-native-vector-icons/Ionicons';
import {Wrapper, SpaceBetween, ProfileImg, TextGrey, Red} from '../Style';
import styled from 'styled-components';

Icon.loadFont();
const Session = ({navigation}) => {
  const {removeFaveToState, addFaveToState, isFave} = useContext(FavesContext);

  const [data] = useState(navigation.getParam('item'));
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    console.log(data.id);
  }, [data]);
  return (
    <Wrapper>
      <SpaceBetween>
        <TextGrey style={{fontSize: 20}}>{data.location}</TextGrey>
        {isFave(data.id) ? (
          <Icon name="ios-heart" size={20} color={Red} />
        ) : null}
      </SpaceBetween>
      <Text style={{fontSize: 34}}>{data.title}</Text>
      <Text style={{fontSize: 20, color: Red}}>{data.startTime}</Text>
      <Text style={{fontSize: 24}}>{data.description}</Text>
      {data.speaker ? (
        <>
          <TextGrey>Presented by:</TextGrey>
          <TouchableOpacity onPress={() => handleModal()}>
            <ProfileImg>
              <Image
                style={{width: 80, height: 80}}
                source={{uri: data.speaker.image}}
              />
            </ProfileImg>
            <Text>{data.speaker.name}</Text>
          </TouchableOpacity>
          <Speaker
            modalVisible={modalVisible}
            onChange={handleModal}
            speaker={data.speaker}
          />
        </>
      ) : null}
      {isFave(data.id) ? (
        <Button
          title={'Remove From Faves'}
          onPress={() => removeFaveToState(data.id)}
        />
      ) : (
        <Button
          title={'Add To Faves'}
          onPress={() => addFaveToState(data.id)}
        />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Session;
