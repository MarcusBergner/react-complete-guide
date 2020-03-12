import React from "react";
import classes from "./Cockpit.css";
// funcional componet
const cockpit = (props)=>{
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