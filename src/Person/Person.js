import React from "react";
// import "./Person.css";
import styled from "styled-components";
// StyleDiv returned a react-component
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc ;
    padding: 16px;
    text-align: center;

    @media(min-width: 500px) {
            width: 450px;
    } 
    `;

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
        <StyleDiv>

        <p onClick={props.click}>I'm {props.name}  and I am {props.age}  years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    {/* </div> */}
        </StyleDiv>
    )
};

export default  person;