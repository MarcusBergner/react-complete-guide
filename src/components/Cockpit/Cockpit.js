import React, { useEffect } from "react";
import classes from "./Cockpit.css";
// funcional componet
const cockpit = (props)=>{

    // this is a React-Hook which combines the (componentDidMount & componentDidUpdate - Lifecyclehook-effect) in one effect! 
    useEffect(() => {
        console.log("[Cockpit.js] 1st useEffect !");
        // Http request.... you can do that 
      const timer =  setTimeout(() => {
            alert("Save data to cloud.... !");
        },1000);
        // cleanUp work --> it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle! 
            return () => {
                // with clearTimeout, it is a example to cleanUp work in useEffect!
                clearTimeout(timer);
            console.log("[Cockpit.js] cleanUp work in useEffect !");
            };

        // [...] --> there allows you to control, all the data thats are inside listed, when this executes! 
        // every update cycle with no 2nd argument!
        // },[props.persons]);
        // [] --> whitout content it will this executes only once, when it is initialize! 
        },[]);

        useEffect(()=>{
            console.log("[Cockpit.js] 2nd useEffect !");
            return () => {
                console.log("[Cockpit.js] 2nd cleanUp work in 2nd useEffect !");
                };
        });
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