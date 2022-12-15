import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import{useNavigation} from '@react-navigation/native';

 
const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () => {
        //console.warn('Send Pressed');
        navigation.navigate('NewPassword');
    };
    const onSignInPressed = () => {
        //console.warn('SignIn Pressed');
        navigation.navigate('SignIn');
    };

    return (
        <View style = {styles.root}>
            <Text style = {styles.title}>Reset your password</Text>

            <CustomInput placeholder= "Username:" value = {username} setValue = {setUsername}/>
            

            <CustomButton text = "Send" onPress = {onSendPressed}/>
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

export default ForgotPasswordScreen;