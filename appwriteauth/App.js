
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/routes/Router';
import { MyProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <MyProvider>
      <Router></Router>
    </MyProvider>

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
