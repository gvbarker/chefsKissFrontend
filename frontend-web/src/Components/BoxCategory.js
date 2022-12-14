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
            if(id === item.id) {
                return { ...item, isChecked: !item.isChecked }
            }
            return item
        });
        onChange(temp);
        console.log(temp)
    };
    console.log(data)
    let boxList = data.map((item,i) => {
        return <CheckBox key={i} index={item.id} name={item.title} checked={item.isChecked} onChange={handleChange} />
    })
    return( boxList )



}; export default BoxCategory