import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi i'am an react app</h1>
       <p>This is really working!</p>
       <Person name="Max" age="22"/>
       <Person name="Peter" age="32" />
       <Person name="Ingo" age="26">My Hobbies: Racing</Person>
      </div>
    );
  }
}
export default App;

