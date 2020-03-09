import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  // define a spezial propertie(state), this only works in components which are extending component!
  // with React 16.8 a new feature "React hooks" --> manage state also in functional components
  state = {
    persons:[
      {name: "Max", age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :42}
    ]
  }
  switchNameHandler =()=>{
    console.log("Was clicked!");
  }
  render() {
    return (
      <div className="App">
       <h1>Hi i'am an react app</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       {/* <Person name="Max" age="22"/> */}
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  }
}
export default App;

