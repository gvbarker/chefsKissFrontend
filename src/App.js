import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CheckBox  from './components/CheckBox.js';
import BoxCategory from './components/BoxCategory';
import CategoryDisplayBox from './components/CategoryDisplayBox.js';

export default function App() {
  state = {
    meat : ['Chicken','Beef','Sausage','Lamb','Fish'],
    meatChecks : [false,false,false,false,false],
  };

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

