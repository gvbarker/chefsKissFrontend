import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from './components/CheckBox';

export default function App() {
  const [meat, setmeat] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Do not like mobile dev one bit</Text>
      <CheckBox
        onPress = {() => setmeat(!meat)}
        title = "meat"
        isChecked={meat}
      />

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
