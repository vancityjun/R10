import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {addFave, getFave} from '../config/model';

export const AsyncStorage = () => {
  const [answer, setAnswer] = useState();
  // state: { answer }
  useEffect(() => {
    // ComponentDidMount
    (async () => {
      await addFave('fav', '9');
      const response = await getFave('fav');
      setAnswer(response);
    })();
  }, []);
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Text>My fav is: {answer}</Text>
    </View>
  );
};
