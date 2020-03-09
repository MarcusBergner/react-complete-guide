import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";
// this show the traditional set up for manage state  by class-components, befor React 16.8 lunched!
const app = props => {
 const [personsState, setPersonsState] =  useState({
    persons:[
      {name: "Max", age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :42}
    ],
    otherState:"some other value"
  });
  const [otherState, setOtherState] = useState( "some other value");

  console.log(personsState,otherState);
  const switchNameHandler =()=>{
    // console.log("Was clicked!");
    // DON'T DO THIS: personsState.persons[0].name= "Maximilaim";
    // setState({}) it will merge this with existing data  
    setPersonsState({persons:[
      {name: "Maximilian", age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :26}
    ]
    });
  };
    return (
      <div className="App">
       <h1>Hi i'am an react app</h1>
       <p>This is really working!</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       {/* <Person name="Max" age="22"/> */}
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  
  }
  export default app;
    // define a spezial propertie(state), this only works in components which are extending component!
  // with React 16.8 a new feature "React hooks" --> manage state also in functional components
  // state = {
  //   persons:[
  //     {name: "Max", age:28},
  //     {name: "Manu", age :22},
  //     {name: "Stefan", age :42}
  //   ],
  //   otherState:"some other value"
  // };
  

