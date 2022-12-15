import React, { useState } from "react";
import CheckBox from "./CheckBox";

function BoxCategory ( {
    data,
    name,
    contents,
    bools,
    onChange
}) {
    
    const handleChange = (id) => {
        let temp = data.map((item) => {
            if(id === item?.id) {
                console.log(item)
                return { ...item, isChecked: !item.isChecked }
            }
            return item
        });
        onChange(temp);
    };
    let boxList = data.map((item,i) => {
        
        return <CheckBox key={i} index={item.id} name={item.name} checked={item.isChecked} onChange={()=>handleChange(item.id)} />
    })
    return( boxList )



}; export default BoxCategory