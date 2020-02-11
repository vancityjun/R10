import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScheduleList from '../components/ScheduleList';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

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

const ScheduleScreen = props => {
  const {data} = useQuery(GET_SESSIONS);
  return (
    <View style={styles.container}>
      <ScheduleList
        data={data ? data.allSessions : []}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScheduleScreen;
