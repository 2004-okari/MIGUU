import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';
import HomeScreen from './screens/HomeScreen';
import LoadFonts from './components/LoadFonts';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import SignupScreen from './screens/Authentication/SignupScreen';
import Selectioncreen from './screens/Selectioncreen';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> */}
          {/* <Stack.Screen options={{ headerShown: false }} name="Location" component={MapScreen} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
          {/* <Stack.Screen options={{ headerShown: false }} name="Map" component={MapScreen} /> */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Selection"
            component={Selectioncreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
