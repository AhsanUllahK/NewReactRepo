import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // const [personState, setPsersonState] = useState({
  state = {
    persons: [
      { name: "Khan", age: 22 },
      { name: "Ali", age: 23 },
      { name: "Kakar", age: 20 },
    ],
  };

  // const [otherState, setOtherState] = useState("some other state");

  // console.log(personState, otherState);

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Ali", age: 23 },
        { name: "Kakar", age: 45 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Khan", age: 22 },
        { name: event.target.value, age: 23 },
        { name: "Kakar", age: 34 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "10px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hhi</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler(" FareedKhan")}
        >
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Qudratullah")}
        >
          {/* () => this.switchNameHandler(" FareedKhan") ===>>> Not recommeded Approach........works same as next line i.e 47 */}
          {/* this.switchNameHandler.bind(this, "Qudratullah") ===>>> Recommended Approach */}
          <h3>My Faviourite fruit is Banana</h3>
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
