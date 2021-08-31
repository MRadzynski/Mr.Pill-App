import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>HomeScreen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default HomeScreen;