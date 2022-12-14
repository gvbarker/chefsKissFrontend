import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CheckBox  from './src/components/CheckBox.js';
import BoxCategory from './src/components/BoxCategory';
import CategoryDisplayBox from './src/components/CategoryDisplayBox.js';
import Btest from './src/components/Btest.js';
export default function App() {
  
  const meats = ['Chicken','Beef','Sausage','Lamb','Fish']
  const checks = [false,false,false,false,false]
  const [meat, setMeat] = useState([])

  const checkboxHandler = (event) => {
    const {value, checked} = e;
    if (checked) {
      setMeat(prev => [...prev, value]);
    } else {
      setMeat(prev => prev.filter(x => x!==value));
    }
  }
  
  
  return (
    <View style={styles.container}>
      <Text>Do not like mobile</Text>
      <CategoryDisplayBox/>
      <Btest></Btest>
      <Text>not one bit</Text>
      <StatusBar style="auto" />
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

