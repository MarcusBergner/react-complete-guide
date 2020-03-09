import React from "react";

// function name should be begin with lowercase 
// AroowFunction: es6 equivalennt to function(){}
const person = () =>{
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;