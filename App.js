/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/home/index'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#72d583',
  }
});

export default App;
