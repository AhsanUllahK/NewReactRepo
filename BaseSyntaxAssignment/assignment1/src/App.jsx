import React, { Component, useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = { name: "Ahsan" };

  nameChangedHandler = (newName) => {
    this.setState({ name: newName.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserInput
          changed={this.nameChangedHandler}
          currentName={this.state.name}
        />
        <UserOutput name="Aqeel" />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name="Rabees" />
        <h2>Assignment 1 is completed.</h2>
      </div>
    );
  }
}
export default App;
