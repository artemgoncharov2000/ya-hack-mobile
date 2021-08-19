import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from "./src/screens/Player/Player";

export default function App() {
  return (
    <Player/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#493673',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
