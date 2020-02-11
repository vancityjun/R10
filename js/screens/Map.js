import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;
