import { useState } from "react";
import BoxCategory from "./BoxCategory";

function CategoryDisplayBox ({}) {
    const data = [
        {id: 0, title: "beef", isChecked: false},
        {id: 1, title: "chicken", isChecked:false},
        {id: 2, title: "fish", isChecked: false}
    ]

    const [ingred, setIngred] = useState(data);

    
    


    return (
        <BoxCategory key="meats" data={ingred} onChange={setIngred}></BoxCategory>
    )



}; export default CategoryDisplayBox