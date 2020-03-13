import React, { useEffect } from "react";
import classes from "./Cockpit.css";
// funcional componet
const cockpit = (props)=>{

    // this is a React-Hook which combines the (componentDidMount & componentDidUpdate - Lifecyclehook-effect) in one effect! 
    useEffect(() => {
        console.log("[Cockpit.js] useEffect !");
        // Http request.... you can do that 
        setTimeout(() => {
            alert("Save data to cloud.... !");
        },1000);
        // [...] --> there allows you to control when this executes! 
        // [] --> whitout content it will this executes only once, when it is initialize! 
    },[props.persons]);
    
       // setting dynamic style inputs, reffernce to css-classes
       const assignedClasses=[];
       let btnClasses="";
       // check whether want to add the red button
       if(props.showPersons){
           btnClasses = classes.Red;
        } 

       if(props.persons.length <=2){
       assignedClasses.push(classes.red); // classes = ["red"]
     }
     if(props.persons.length <=1){
       assignedClasses.push(classes.bold);  // classes = ["red", "bold"]
     }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/* anonymous function will executed onClick 
        returns result of switchNameHandler() */}
            <button
             className={btnClasses}
             onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

};
export default cockpit;