import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

function CheckBox(
    { checked, 
      onChange,
      name,
      index,
      key
    }) {


    function onPress() {
        onChange(index);
    }



    return (
        <View style={styles.checkboxContainer}>
            <Text>{name}</Text>
            <Pressable 
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={onPress}
            >
                {checked && <Ionicons name="checkmark" size={24} color="white"/>}        
            </Pressable>
        </View>
    );

};

export default CheckBox
    
const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'coral',
      backgroundColor: 'transparent',
    },
  
    checkboxChecked: {
      backgroundColor: 'coral',
    },
  
    appContainer: {
      flex: 1,
      alignItems: 'center',
    },
  
    appTitle: {
      marginVertical: 16,
      fontWeight: 'bold',
      fontSize: 24,
    },
  
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: 500,
      fontSize: 18,
    },
  });