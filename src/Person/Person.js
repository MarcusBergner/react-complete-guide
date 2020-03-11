import React from "react";
import classes from "./Person.css";
// StyleDiv returned a react-component
// function name should be begin with lowercase 
// ArrowFunction: es6 equivalennt to function(){}
const person = (props) => {
      // const style ={
    //     "@media (min-width: 500px)" :{
    //         width: "450"
    //     }
    // };
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
    // <div className="Person" style={style}>
        <div className={classes.Person}>

        <p onClick={props.click}>I'm {props.name}  and I am {props.age}  years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    {/* </div> */}
        </div>
    )
};

export default  person;