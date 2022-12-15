import React, { useEffect, useState } from 'react';
import BoxCategory from '../Components/BoxCategory.js';
import CategoryDisplayBox from '../Components/CategoryDisplayBox.js';
class Test extends React.Component{
    state= {
        apiIngred:[],
        currRecipes:[]
    };
    componentDidMount() {
        fetch("http://10.30.82.127:4444/api/ingreds/") 
            .then((response)=>response.json([]))
            .then((data)=>{
                this.setState({apiIngred:this.prepData(data).slice()});
            });
    }

    getYoMeals(urlRequest) {
        let url = "http://10.30.82.127:4444/api/recipes/meals"+urlRequest 
        fetch(url)
            .then((response)=>response.json([]))
            .then((data)=> {
                this.setState({currRecipes:data})
            })
        console.log(this.state.currRecipes)
    }

    /*
    CODE TO IMPLEMENT LATER 
    STOPS THE FETCH DELAY FROM REACT

    function getResult(getToken) {
  return fetch(url, {
    headers: {
      "Authorization": something,
      "Jenkins-Crumb": getToken
    },
    redirect: 'follow',
  })
    .then(response => response.json())
    .then(data => {
      if (data.result == null) {
        console.log('retrieving data');
        return getResult(getToken); // <-----------------------------
      } else if (data.result == "SUCCESS") {
        console.log('success');
        return data; // <-------------------------------------------
      }
      // What if data.result is neither null nor SUCCESS?  <--------
    });
}

    */ 
    handleChildren(parent, last, prelist){
        last++
        let childlist = parent?.children?.split(', ')
        let itemlist = []
        for(let i=0; i<childlist?.length; i++) {
            if (prelist?.includes(childlist[i])){
                continue
            }
            itemlist[i]= {
                "id":last,
                "name":childlist[i],
                "isChecked":false
            }
            last++
        }
        return [itemlist, last]         
    }

    addBoolAttrib(list){
        let tidiedList = list
        for(let i=0; i<list.length; i++){
            tidiedList[i]["isChecked"]=false
        }
        return tidiedList
    }
    genFullIngredList(struct) {
        let prelist = []
        let postlist = []
        for(let i=0; i<struct?.length;i++) {
            prelist[i] = struct.at(i)?.name
        }
        let last = struct.at(-1)?.id
        for(let i=0; i<struct?.length; i++) {
            let [childlist, lastid] = this.handleChildren(struct.at(i), last,prelist)
            postlist=postlist.concat(struct.at(i)).concat(childlist)
            
            last=lastid
        }
        return postlist
    }

    ingredSubmission(list) {
        let ingredRequest = ''
        for(let i=0; i<list?.length; i++) {
            if(list.at(i)?.isChecked) {
                ingredRequest += list.at(i)?.name + ' '
            }
        }
        ingredRequest=`?ingred=${encodeURIComponent(ingredRequest.slice(0,-1))}`
        this.getYoMeals(ingredRequest)
    }

    prepData(list){
        list = this.genFullIngredList(this.addBoolAttrib(list))
        return list
    }
    onUpdate = (newdata) => {
        this.setState({apiIngred:newdata})
    }
    render() {
        let ingredientHeaders = this.state.apiIngred
        return (
            <div>
            <p>INGREDIENT SELECTION</p>
            <BoxCategory data={this.state.apiIngred} onChange={this.onUpdate}/>
            <button onClick={()=>{this.ingredSubmission(this.state.apiIngred)}}>Find your meal.</button>
            </div>
        );
        
    }

}
export default Test
