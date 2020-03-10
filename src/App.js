import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// this show the traditional set up for manage state  by class-components, befor React 16.8 lunched!
class  App extends Component {
    state = {
    persons:[
      {name: "Max", age:28},
      {name: "Manu", age :22},
      {name: "Stefan", age :42}
    ],
    otherState:"some other value",
    showPersons:false
  }
  // remove persons by index and update state
  deletePersonHandler= (personIndex)=>{
    // const persons = this.state.persons.slice();
    // equivalent to slice(), but es6 syntax to become a new array with objects from the old array!
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }
  nameChangedHandler = (event) => {
    // (event.target.value) event binding handler --> value property which users entered.  
    // setState()--> will be merged whatever pass with our existing state. 
    // --> after react know that the state was changed & that should check if it need to update the DOM! 
    this.setState({
      persons:[
        {name: "max", age:28},
        {name: event.target.value, age :29},
        {name: "Stefan", age :26}
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // everything inside the render method gets executed whenever React re-renders this component
  render() {
    // set inlineStyles
    const style = {
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div >
          {/* start outputing as list, if more than 2 arguments inside map(), they must wrap in ()  */}
          {this.state.persons.map((person, index) => {
            return <Person
            click={()=> this.deletePersonHandler(index)}
             name={person.name}
            age={person.age}/>
          })}
          
        </div> 
      );
    }

    return (
      <div className="App">
       <h1>Hi i'am an react app</h1>
       <p>This is really working!</p>
       {/* anonymous function will executed onClick 
       returns result of switchNameHandler() */}
       <button
       style={style} 
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}
        
      
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;
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
        
    
