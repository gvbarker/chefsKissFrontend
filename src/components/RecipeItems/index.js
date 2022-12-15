import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from './styles';
import StyledButton from "../StyledButton";

const RecipeItem = (props) => {

  const {name, tagLine, image} = props.recipe;
    return(
      <View style = {styles.recipeContainer}>
        <ImageBackground  
          source ={image} 
          style= {styles.image}
        ></ImageBackground>

        <View style = {styles.titles}>
          <Text style = {styles.title}> {name}</Text>
          <Text style = {styles.subtitle}> {tagLine}</Text>
        </View>

        <View style = {styles.buttonContainer}>
          <StyledButton 
            type = "primary" 
            content = {"Show Ingredients"} 
            onPress= {() =>{
              console.warn("Ingredients was pressed")
            }}
          />

          <StyledButton 
            type = "secondary" 
            content = {"Add to favorites"} 
            onPress= {() =>{
              console.warn("Add to favorites was pressed")
            }}
          />
        </View>
      </View>
    );
};

export default RecipeItem;