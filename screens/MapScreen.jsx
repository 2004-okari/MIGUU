import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Icon name='menu-outline' size={24} color='red' />
      </TouchableOpacity>
      <Text>MapScreen</Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    // padding: 200,
  }
})