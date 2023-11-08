import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MotiView } from 'moti';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          translateY: 250,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <Image source={require('../assets/uber.1.jpg')} style={styles.uberImage} />
      </MotiView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  uberImage: {
    width: wp('97%'),
    height: hp('30%'),
    aspectRatio: 4 / 3,
    top: hp('20%'),
    resizeMode: 'contain',
    transform: [{ rotate: '90deg' }],
  },
});
