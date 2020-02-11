import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScheduleList from '../components/ScheduleList';
import {AsyncStorage} from '../components/AsyncStorage';
import FavesProvider, {FavesContext} from '../context';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FavoritesScreen = ({navigation}) => {
  const {deleteFave, addFaveToState, favesId} = useContext(FavesContext);
  const [faves, setFaves] = useState([]);
  const GET_SESSIONS = gql`
    {
      allSessions(orderBy: startTime_ASC) {
        id
        title
        description
        location
        startTime
        speaker {
          id
          name
          image
          bio
        }
      }
    }
  `;
  const {data} = useQuery(GET_SESSIONS);

  let newFaves = [];
  favesId.map(id => {
    const result = data.allSessions.filter(session => session.id === id);
    newFaves.push(result);
  });
  useEffect(() => {
    setFaves(newFaves.flat());
  }, [favesId]);
  return (
    <View style={styles.container}>
      <ScheduleList
        data={faves}
        navigation={navigation}
        routeName={navigation.state.routeName}
      />
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

export default FavoritesScreen;
