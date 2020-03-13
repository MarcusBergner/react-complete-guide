import React, { Component } from "react";
import classes from "./Person.css";
// StyleDiv returned a react-component
// function name should be begin with lowercase 
// ArrowFunction: es6 equivalennt to function(){}
class Person extends Component {
    render(){

        console.log("[Person.js] randering...");
        // const style ={
            //     "@media (min-width: 500px)" :{
                //         width: "450"
                //     }
                // };
                // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
                return (
                    // <div className="Person" style={style}>
                    <div className={classes.Person}>

        <p onClick={this.props.click}>I'm {this.props.name}  and I am {this.props.age}  years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
    {/* </div> */}
        </div>
    )
}
};

export default  Person;