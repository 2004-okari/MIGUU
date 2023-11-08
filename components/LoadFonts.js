import { View, Text } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';

const LoadFonts = () =>
  Font.loadAsync({
    'font-one': require('../assets/fonts/Rubik-Light.ttf'),
    'font-two': require('../assets/fonts/Rubik-Regular.ttf'),
  });

export default LoadFonts;
