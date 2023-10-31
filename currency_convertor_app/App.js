
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Currencies from './src/components/Currencies';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={styles.container}>
      <Currencies></Currencies>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
