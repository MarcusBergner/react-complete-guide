import React, { Component } from "react";
import classes from "./Person.css";
import Auxillary from "../../../hoc/Auxillary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

// StyleDiv returned a react-component
// function name should be begin with lowercase
// ArrowFunction: es6 equivalennt to function(){}

//-----notes-----
// for add some prop types --> use an extra react-package, "npm install --save prop-types"
class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] randering...");
    // const style ={
    //     "@media (min-width: 500px)" :{
    //         width: "450"
    //     }
    // };
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
      // <div className="Person" style={style}>
      // <Fragment>
      <Auxillary>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ?
              <p>Authenticated!</p> :
              <p>Please log in </p>}
        </AuthContext.Consumer>
        {/*alternative to our "AUX" custom High-order-Component:
                       --> React.Fragment*/}
        {/* <div className={classes.Person}> */}
        {}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
        {/* </div> */}
      </Auxillary>
      // </Fragment>
    );
  }
}
// propTypes --> special property which you add any Javascript object or any Javascript component object!
//  React will watch out for in development-mode + give warning by pass incorrect porps.
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
