import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import './App.css';
import classes from "./App.css";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";
// this show the traditional set up for manage & mainpulate state's  by class-components, befor React 16.8 lunched!
class App extends Component {
  constructor(props) {
    // IMPORTEND --> if class extends Components  
    // --> TUDO super() to execute the constructor of the component which is extending !
    super(props);
    console.log("[App.js] constructor");
    // here is a example bevore React 16.8 release, to initialize the state!  
    // this.state = {
    //   persons:[
    //     {id:"asasd", name: "Max", age:28},
    //     {id:"asasd2", name: "Manu", age :22},
    //     {id:"sasdq",name: "Stefan", age :42}
    //   ],
    //   otherState:"some other value",
    //   showPersons:false

    // }
  }
  // newer syntax after (16.8) for initialize the state --> oldSyntax: with constructor !
  state = {
    persons: [
      { id: "asasd", name: "Max", age: 28 },
      { id: "asasd2", name: "Manu", age: 22 },
      { id: "sasdq", name: "Stefan", age: 42 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  }
  // ---begin---Component-Lifecycle-Methods
  // --> most important hooks, for things like fetchung new data from a server--> are componentDidUpdate & componentDidMount !
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  // 
  USAFE_componentWillMount() {
    console.log("[App.js] USAFE_componentWillMount");
  }

  // important for performance improvements
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;

  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");

  }
  // only older react version support this method componentDidMount()
  // componentDidMount() {
  //     console.log("[App.js] componentDidMount");
  //   }
  // ---end---Component-Lifecycle-Methods


  // remove persons by index and update state
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // equivalent to slice(), but es6 syntax to become a new array with objects from the old array!
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
    // --> alternative to [...] const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    // (event.target.value) event binding handler --> value property which users entered.  
    // setState()--> will be merged whatever pass with our existing state. 
    // --> after react know that the state was changed & that should check if it need to update the DOM! 

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // everything inside the render method gets executed whenever React re-renders this component
  render() {
    // set inlineStyles
    // const style = {
    //   backgroundColor:"green",
    //   color:"white",
    //   font:"inherit",
    //   border:"1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   // define pseudo selector with Radium- package (until Radium-package is install).
    //   ":hover" :{
    //     backgroundColor:"lightgreen",
    //     color:"black"
    //   }
    // };
    console.log("[App.js] render");
    let persons = null;
    // setting person variable 
    if (this.state.showPersons) {
      persons = (
        <div>

          {/* start outputing as list, if more than 2 arguments inside map(), they must wrap in ()  */}
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      // // change style dynamicaly styling new value to one of style-properties
      // style.backgroundColor="red";
      //     style[":hover"] = {
      //       backgroundColor:"salmon",
      //       color:"black"
      //     }
    }

    return (

      <Auxillary>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }} >Remove Cockpit
         </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLenght={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />) : null}
        {persons}


      </Auxillary>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
// wrapping App-component with Radium-component --> adding kind of injection some extra functionality 
// wrapping App-component with withClasse "High-Order-Component" in this case,
// --> if you handles errors or sends analytics data or antything logic like that!
export default withClass(App, classes.App);
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


