import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import{useNavigation} from '@react-navigation/native';

 
const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        //console.warn('Confirm Pressed');
        navigation.navigate('RecipesList');
    };
    const onSendNewCodePressed = () =>{
        console.warn('Send new code Pressed');

    };
    const onSignInPressed = () => {
        //console.warn('SignIn Pressed');
        navigation.navigate('SignIn');

    };

    return (
        <View style = {styles.root}>
            <Text style = {styles.title}>Confirm your email</Text>

            <CustomInput placeholder= "Confirmation Code:" value = {code} setValue = {setCode}/>
            

            <CustomButton text = "Confirm" onPress = {onConfirmPressed}/>
            <CustomButton text = "Send a new code" onPress = {onSendNewCodePressed} type = "secondary" />
            <CustomButton text = "Back to Sign in" onPress = {onSignInPressed} type = "tertiary" />

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        marginVertical: 40,
    }
}); 

export default ConfirmEmailScreen;