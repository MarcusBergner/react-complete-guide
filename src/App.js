import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
// this show the traditional set up for manage state  by class-components, befor React 16.8 lunched!
class  App extends Component {
    state = {
    persons:[
      {name: "Max", age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :42}
    ],
    otherState:"some other value"
  }
   switchNameHandler =(newName)=>{
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name= "Maximilaim";
    // setState({}) it will merge this with existing data  
    this.setState({persons:[
      {name: newName, age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :26}
    ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      person:[
        {name: "max", age:28},
        // (event.target.value) event binding handler --> value property which users entered.  
        {name: event.target.value, age :22},
        {name: "Stefan", age :26}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
       <h1>Hi i'am an react app</h1>
       <p>This is really working!</p>
       {/* anonymous function will executed onClick 
       returns result of switchNameHandler() */}
       <button
       style={style} 
       onClick={()=> this.switchNameHandler("Maximilian")}>Switch Name</button>
       {/* <Person name="Max" age="22"/> */}
       <Person
        name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "MaX !")}
        changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
       <Person 
       name={this.state.persons[2].name}
        age={this.state.persons[2].age}
       />
      </div>
    );
  
  }
}
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
    
    export default App;
    
