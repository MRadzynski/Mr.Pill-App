import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>SettingsScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default SettingsScreen;