import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../HOC/withClass";
import Auxiliary from "../HOC/Auxilliary";
import AuthContext from "../context/auth-context";

// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
// import styled from "styled-components";
// import Persons from "./../components/Persons/Persons";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);

    console.log("Appjsifle Consturctor");
  }
  state = {
    persons: [
      { name: "Khan", age: 22, id: 1 },
      { name: "Ali", age: 23, id: 2 },
      { name: "Kakar", age: 20, id: 3 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromPerson", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate......");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] ComponentDidUpdate.........");
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 22 },
  //       { name: "Ali", age: 23 },
  //       { name: "Kakar", age: 45 },
  //     ],
  //     otherState: "Some Other Value",
  //     showPersons: true,
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const persons = [...this.state.persons];

    // At position personIndex, remove 1 item:
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  // nameChangedHandler = (event, id) => {
  //   const personIndex = this.state.persons.findIndex((p) => {
  //     return p.id === id;
  //   });

  //   const person = { ...this.state.persons[personIndex] };

  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex] = person;

  //   this.setState({ persons: persons });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  LoginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[AppJS] renders...");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* <ErrorBoundary> */}
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
          {/* </ErrorBoundary> */}

          {/* {this.state.persons.map((person, index) => {
            // printing persons data dynamically
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })} */}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Toggle Button
        </button>

        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.LoginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
// export default withClass(App, classes.App);
