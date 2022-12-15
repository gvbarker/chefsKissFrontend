import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import{useNavigation} from '@react-navigation/native';
 
const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        //console.warn('Submit Pressed');
        navigation.navigate('RecipesList');
    };
    const onSignInPressed = () => {
        //console.warn('SignIn Pressed');
        navigation.navigate('SignIn');
    };

    return (
        <View style = {styles.root}>
            <Text style = {styles.title}>Reset your password</Text>

            <CustomInput placeholder= "Code:" value = {code} setValue = {setCode}/>
            <CustomInput placeholder= "Enter your new password:" value = {newPassword} setValue = {setNewPassword}/>

            

            <CustomButton text = "Submit" onPress = {onSubmitPressed}/>
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

export default NewPasswordScreen;