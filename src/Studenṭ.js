import React, { Component } from "react";

//Normal function create
//function Student() { return <h1>This is the component</h1>  }

//ES6 Function

const Student=(props)=>{
    
    return (
        <div>
        <h1>Hello: {props.name}</h1>,
        <h1>City:{props.city}</h1>
        </div>
    ); 
    
    
};


//class based component

// class Teacher extends Component {
//     render(){
//         return <h1>This is class based component</h1>;
//     }

// }


export default Student;

