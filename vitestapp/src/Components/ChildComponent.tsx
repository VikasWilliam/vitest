import React from "react";

type person={
    Name:string,
    Age:number,
    Occupation: string
}

const ChildComponent=({person}:{person:person})=>{
    return(
        <div>
            
            <p>Name:{person.Name}</p>
            <p>Age:{person.Age}</p>
            <p>Occupation:{person.Occupation}</p>
        </div>
    )
}

export default ChildComponent;