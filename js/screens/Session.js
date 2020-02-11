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
    <View>
      <Text>{data.location}</Text>
      {isFave(data.id) ? (
        <Icon name="ios-heart" size={20} color="#dd3333" />
      ) : null}
      <Text>{data.title}</Text>
      <Text>{data.startTime}</Text>
      <Text>{data.description}</Text>
      {data.speaker ? (
        <>
          <TouchableOpacity onPress={() => handleModal()}>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: data.speaker.image}}
            />
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
    </View>
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
