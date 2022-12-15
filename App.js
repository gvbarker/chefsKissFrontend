import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from "react-native";

import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';



export default function App() {
  return (
    <View style={styles2.root}>
      <Navigation/>
      <StatusBar style="auto"/>
    </View>
  );
}
const styles2 = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

