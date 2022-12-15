import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import{useNavigation} from '@react-navigation/native';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        //console.warn('Register pressed');
        navigation.navigate('ConfirmEmail')


    };
    const onSignInPressed = () =>{
        //console.warn('SignIn Pressed');
        navigation.navigate('SignIn')
    };

    return (
        <View style = {styles.root}>
            <Text style = {styles.title}>Create an account</Text>

            <CustomInput placeholder= "Username" value = {username} setValue = {setUsername}/>
            <CustomInput placeholder= "Email" value = {email} setValue = {setEmail}/>
            <CustomInput placeholder= "Password" value = {password} setValue = {setPassword} secureTextEntry = {true}/>
            <CustomInput placeholder= "Repeat Password" value = {passwordRepeat} setValue = {setPasswordRepeat} secureTextEntry = {true}/>


            <CustomButton text = "Register" onPress = {onRegisterPressed}/>
            <CustomButton text = "Have an account? Sign in" onPress = {onSignInPressed} type = "tertiary" />
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

export default SignUpScreen