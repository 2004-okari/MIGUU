import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInput from 'react-native-text-input-interactive';
import COLORS from '../Constants/colors';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [destination, setDestination] = useState(null);

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Map />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.destinationDiv} onPress={() => { navigation.navigate('Selection')}}>
          <Text>Where to ?</Text>
          <Icon name="search-outline" color="purple" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.foodDiv}>
          <TouchableWithoutFeedback>
            <Icon name="pizza-outline" size={24} color="blue" />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <Text>Miguu Foods</Text>
            <Text>Fast delivery</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    height: hp('75%'),
    width: '100%',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('0.8%'),
  },
  destinationDiv: {
    marginVertical: 4,
    width: wp('95%'),
    height: hp('7%'),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingHorizontal: wp('3%'),
  },
  foodDiv: {
    width: wp('95%'),
    height: hp('7%'),
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: wp('3%'),
  },
});
