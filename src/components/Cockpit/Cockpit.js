import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
// funcional componet
const cockpit = (props) => {

    // useRef-Hook
    const toggleBtnRef = useRef(null);
    // useContext-Hook --> the same what static contextType is to class-based components,
    // it gives you to access to the context. context API managing data across components,
    // without the need to pass data around with props! --> Redux have a alternative way
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    // this is a React-Hook which combines the (componentDidMount & componentDidUpdate - Lifecyclehook-effect) in one effect! 
    useEffect(() => {
        console.log("[Cockpit.js] 1st useEffect !");
        // Http request.... you can do that 
        // const timer = setTimeout(() => {
        //     alert("Save data to cloud.... !");
        // }, 1000);
        toggleBtnRef.current.click();
        // cleanUp work --> it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle! 
        return () => {
            // with clearTimeout, it is a example to cleanUp work in useEffect!
            // clearTimeout(timer);
            console.log("[Cockpit.js] cleanUp work in useEffect !");
        };

        // [...] --> there allows you to control, all the data thats are inside listed, when this executes! 
        // every update cycle with no 2nd argument!
        // },[props.persons]);
        // [] --> whitout content it will this executes only once, when it is initialize! 
    }, []);
    // useEffect --> basically runs after every render cycle !
    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect !");
        return () => {
            console.log("[Cockpit.js] 2nd cleanUp work in 2nd useEffect !");
        };
    });
    // setting dynamic style inputs, reffernce to css-classes
    const assignedClasses = [];
    let btnClasses = "";
    // check whether want to add the red button
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ["red"]
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);  // classes = ["red", "bold"]
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            {/* anonymous function will executed onClick 
        returns result of switchNameHandler() */}
            <button
                ref={toggleBtnRef}
                className={btnClasses}
                onClick={props.clicked}>Toggle Persons</button>

            <button onClick={authContext.login} >Log in</button>

        </div>
    );

};
// React.memo() --> store snapshot of this component, only if inputs changes it will re-render!
// otherwise if inputs do not change and some parent component wants to update this cockpit-component, -->React give back that stored component! 
// it is a good idea to wrap functional componets that might not need to update with ebvery change in the parent component! 
export default React.memo(cockpit);