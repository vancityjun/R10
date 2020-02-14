import React, {useEffect} from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import {Wrapper, Title, Desc} from '../Style';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Drawer from '../components/Drawer';

const GET_CONDUCTS = gql`
  {
    allConducts {
      title
      description
    }
  }
`;
const AboutScreen = () => {
  const {loading, error, data} = useQuery(GET_CONDUCTS);
  useEffect(() => {
    // console.log(data);
  });
  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <View>
          <Desc>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Desc>
          <Title>Date &amp; Venue</Title>
          <Desc>
            The R10 conference will take place on Tuesday, June 27, 2019 in
            Vancouver, BC.
          </Desc>
          <Title>Code of Conduct</Title>
          {data ? (
            <FlatList
              data={data.allConducts}
              renderItem={({item}) => [
                <Drawer
                  key={item.id}
                  title={
                    <Text>
                      <Text>+</Text> <Text>{item.title}</Text>
                    </Text>
                  }
                  description={item.description}
                />,
              ]}
            />
          ) : null}
        </View>
        <View style={styles.footer}>
          <Text>© RED Academy 2020</Text>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const lightGrey = '#e6e6e6';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderBottomColor: lightGrey,
    borderBottomWidth: 1,
  },
  footer: {
    borderTopColor: lightGrey,
    borderTopWidth: 1,
  },
});

export default AboutScreen;
