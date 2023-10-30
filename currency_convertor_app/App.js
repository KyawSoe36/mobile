import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Currencies from './src/components/Currencies';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Created App!</Text>
      <Currencies></Currencies>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
