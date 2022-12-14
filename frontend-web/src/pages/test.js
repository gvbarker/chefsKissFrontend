import React, { useEffect, useState } from 'react';
import CategoryDisplayBox from '../Components/CategoryDisplayBox.js';
class Test extends React.Component{
    state= {
        apiIngred:[]
    };
    componentDidMount() {
        fetch("http://10.30.82.127:4444/api/ingreds/") 
            .then((response)=>response.json([]))
            .then((data)=>{
                this.setState({apiIngred:data});
            });
    }
    //console.log(apiIngred)
    tidyList(list){
        let tidiedList = list
        for(let i=0; i<list.length; i++){
            tidiedList[i]["isChecked"]=false
        }
        return tidiedList
    }
    //console.log(tidyList(apiIngred))
    
    render() {
        console.log(this.state.apiIngred)
        return (
            <div>
            <p>Do not like mobile</p>
            <CategoryDisplayBox list={this.tidyList(this.state.apiIngred)}/>
            <p>not one bit</p>
            </div>
        );
        
    }

}
export default Test
