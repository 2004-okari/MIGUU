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
          duration: 800,
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Your route</Text>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="close-outline" color="purple" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
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
          duration: 800,
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
    marginTop: 10
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  closeIcon: {
    backgroundColor: COLORS.TEXT3,
    borderRadius: 4,
  },
  container3: {
    alignContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  inputText: {
    width: wp('94%'),
    marginBottom: 4
  }
});
