import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const MapScreen = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <TouchableOpacity>
    //     <Icon name='menu-outline' size={24} color='red' />
    //   </TouchableOpacity>
    //   <Text>MapScreen</Text>
    // </SafeAreaView>
    <View style={styles.container}>
      <Map />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    height: hp('55%'),
    width: '100%',
  }
})