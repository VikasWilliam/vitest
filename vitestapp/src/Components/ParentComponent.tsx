import React from "react";
import ChildComponent from "./ChildComponent";


const jsonObject={
    "Name":"John Doe",
    "Age": 30,
    "Occupation": "Software Engineer",
};

const ParentComponent=()=>{
    return(
        <div>
            <h3>Parent Component</h3>
            <ChildComponent person={jsonObject}/>
        </div>
    )
}

export default ParentComponent;