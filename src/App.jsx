import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import styled from "styled-components";

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
  state = {
    persons: [
      { name: "Khan", age: 22, id: 1 },
      { name: "Ali", age: 23, id: 2 },
      { name: "Kakar", age: 20, id: 3 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

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

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
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
          })}
        </div>
      );
    }

    const classes = [];

    // let is es6 version of var

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Project</h1>
        <h2 className={classes.join(" ")}>This is really working</h2>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle showname
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
