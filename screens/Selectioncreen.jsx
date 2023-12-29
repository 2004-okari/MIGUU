import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TextInput from 'react-native-text-input-interactive';
import COLORS from '../Constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Selectioncreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <MotiView
        from={{
          translateY: -250,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="close-outline" color="purple" size={24} />
          </TouchableOpacity>
          <Text>Your route</Text>
        </View>
        <View>
          <TextInput
            // onChangeText={handleEmailChange}
            mainColor={COLORS.BG2}
            originalColor="transparent"
            animatedPlaceholderTextColor="#757575"
            placeholder="Email Address"
            textInputStyle={styles.inputText}
            // value={email}
            // onBlur={onBlurEmail}
          />
          <TextInput
            // onChangeText={handleEmailChange}
            mainColor={COLORS.BG2}
            originalColor="transparent"
            animatedPlaceholderTextColor="#757575"
            placeholder="Email Address"
            textInputStyle={styles.inputText}
            // value={email}
            // onBlur={onBlurEmail}
          />
        </View>
      </MotiView>
      <MotiView
        from={{
          translateY: 350,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <ScrollView style={styles.container2}>
          <View style={styles.content}>
            <Text style={styles.text}>Okari Nyandika</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Okari Nyandika</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Okari Nyandika</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Okari Nyandika</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Okari Nyandika</Text>
          </View>
        </ScrollView>
      </MotiView>
    </SafeAreaView>
  );
};

export default Selectioncreen;

const styles = StyleSheet.create({
  container2: {
    backgroundColor: 'red',
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('94%'),
    backgroundColor: 'blue',
    height: 48,
    marginBottom: 4,
    borderRadius: 4,
  },
});
