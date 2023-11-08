import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Image source={require('../assets/uber.1.jpg')} />
      <Text>Okari Nyandika</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})