import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import RecipeItem from '../components/RecipeItems';
import RecipesList from '../components/RecipesList';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();


const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name  = "SignIn" component= {SignInScreen} />
                <Stack.Screen name  = "RecipesList" component= {RecipesList} />
                <Stack.Screen name  = "SignUp" component= {SignUpScreen} />
                <Stack.Screen name  = "ConfirmEmail" component= {ConfirmEmailScreen} />
                <Stack.Screen name  = "ForgotPassword" component= {ForgotPasswordScreen} />
                <Stack.Screen name  = "NewPassword" component= {NewPasswordScreen} />

            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

const Tab = createMaterialBottomTabNavigator();

const  HomeTabs = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen name ="Home" component = {RecipesList} />
            <Tab.Screen name ="Favorites" component = {RecipesList} />
            <Tab.Screen name ="Profile" component = {RecipesList} />
        </Tab.Navigator>
    );
};

export default Navigation; 