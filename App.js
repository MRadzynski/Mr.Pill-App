/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/home/index'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <HomeScreen/>
      </SafeAreaView>
    </NavigationContainer>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#72d583',
  }
});

export default App;
