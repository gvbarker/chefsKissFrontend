import React, {useState, useEffect} from "react";
import {Alert, FlatList, View, Text} from 'react-native';

function Btest() {
    const [data, setData] = useState([{id:1, title:"test", ingredients:"test", instructions:"test"}])
    useEffect(()=> {
        fetch('http://10.30.82.60:4444/api/recipes/', {
            method:"GET"
        })

        .then(resp => resp.json())
        .then(data=> {
            setData(data)
        })
        .catch(error => Alert.alert("Error", error.message))

    }, [])
    let btestlist = data.map((item) => (
            <View key={item.id}>
                <Text>{item.title}</Text>
                <Text>{item.ingredients}</Text>
                <Text>{item.instructions}</Text>
            </View>
    ))
    return( btestlist )


    
} export default Btest