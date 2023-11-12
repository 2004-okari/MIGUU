import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return (
    <MapView
    style={styles.container}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }}
  >
    <Marker 
      // draggable
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}
    />
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})