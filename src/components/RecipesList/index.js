import React from 'react';
import {View, Text, FlatList, Dimensions} from "react-native";
import RecipeItems from '../RecipeItems';
import styles from './styles';
import recipes from './recipes';

const RecipesList = (props) => {   
    const recipes1 = [{
        name: 'Chicken Tenders',
        tagLine: '700 calories',
        image: require('../../../assets/chicken_tenders.jpeg'),
    },{
        name: 'Chicken Alfredo',
        tagLine: '350 calories',
        image: require('../../../assets/chicken_alfredo.jpeg'),
    
    },{
        name: 'Caesar Salad',
        tagLine: '299 calories',
        image: require('../../../assets/caesar_salad.jpeg'),
    },{
        name: 'Steak Burrito',
        tagLine: '350 calories',
        image: require('../../../assets/steak_burrito.jpeg'),
    }];
    
    const renderItem= ({ item }) => (
        <RecipeItems recipe = {item} />
    );
    return(
        <View style = {styles.container}>
            <FlatList
                data = {recipes1}
                renderItem = {renderItem}
                keyExtractor = {item => item.name}
                showVerticalScrollIndicator = {false}
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('window').height}
                >
            </FlatList>
    
        </View>
    );
};

export default RecipesList;