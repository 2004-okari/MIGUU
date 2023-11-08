import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';
import BottomTabNavigation from './navigation/Navigation';
import HomeScreen from './screens/HomeScreen';
import LoadFonts from './components/LoadFonts';
import { AppLoading } from 'expo';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <BottomTabNavigation />;
  } else {
    return <AppLoading startAsync={LoadFonts} onFinish={() => setFontsLoaded(true)} />;
  }
}

const styles = StyleSheet.create({});
