import React, { PureComponent } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
// functional- component
// PureComponent --> just normal component implements shouldComponentUpdate with a complete props check,
// any changes in any prop of that component!
class Persons extends PureComponent {
    // ---begin---Component-Lifecycle-Update-Methods

    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // could used componentWillReceiveProps() for update some internal state befor react 16.8
    // componentWillReceiveProps(props){
    //     console.log("[Persons.js] componentWillReceiveProps", props);
    // }
    // manuelle definition example, for Component Property-Update-Ckecks !  
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if(nextProps.persons !== this.props.persons ||
    //          nextProps.changed !== this.props.changed ||
    //           nextProps.clicked !== this.props.clicked
    //           ){
    //         return true;
    //     }else {
    //       return  false;
    //     }
    //     // return false;
    //     }
    getSnapshotBeforeUpdate(prevProps, prevState) {


        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot!" };

    }
    // componentDidUpdate() --> use it for fetch new data from a server, after the update finished !  
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);

    }
    // CleanUp work --> for class-based-componets
    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount --> CleanUp work !");
    }
    // ---end---Component-Lifecycle-Update-Methods

    render() {

        console.log("[Persons.js] rendering...");
        return this.props.persons.map((person, index) => {

            return (
                <ErrorBoundary key={person.id}>

                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}

                        changed={(event) => this.props.changed(event, person.id)} />
                </ErrorBoundary>
            );
        });
    }
};

export default Persons;