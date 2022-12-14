import React from "react";

function CheckBox(
    { checked, 
      onChange,
      name,
      index,
      key
    }) {


    function onPress() {
        onChange(index);
    }



    return (
        <div >
            <p>{name}</p>
            <button 
                onClick={onPress}
            >        
            </button>
        </div>
    );

};

export default CheckBox
    
