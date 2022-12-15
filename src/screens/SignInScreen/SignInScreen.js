import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/wabash_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        //console.warn('Sign in pressed');
        // validate user by sending to the back-end 
        navigation.navigate('RecipesList');
    };
    const onForgotPasswordPressed = () => {
        //console.warn('Forgot password pressed');
        navigation.navigate('ForgotPassword');
    };
    const onSignUpPressed = () =>{
        //console.warn('SignUp Pressed');
        navigation.navigate('SignUp');
    };

    return (
        <View style = {styles.root}>
            <Image 
                source = {Logo} 
                style = {[styles.logo, {height: height * 0.3}]} 
                resizeMode = "contain" 
            />

            <CustomInput placeholder= "Username" value = {username} setValue = {setUsername}/>
            <CustomInput placeholder= "Password" value = {password} setValue = {setPassword} secureTextEntry = {true}/>

            <CustomButton text = "Sign In" onPress = {onSignInPressed}/>
            <CustomButton text = "Forgot Password?" onPress = {onForgotPasswordPressed} type = "tertiary"/>
            <CustomButton text = "Don´t have an account? Create one" onPress = {onSignUpPressed} type = "tertiary" />


        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: '90%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen