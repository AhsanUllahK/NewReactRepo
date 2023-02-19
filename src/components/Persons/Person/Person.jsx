import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ecc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;
class Person extends Component {
  render() {
    const style = {
      "@media (min-width: 500px)": {
        width: "450px",
      },
    };

    console.log("[Person.js] is rendering........");
    return (
      // <div className="Person" style={style}>
      <StyledDiv>
        <h3>My name is {this.props.name}</h3>
        <h3 onClick={this.props.click}>and I am {this.props.age} old</h3>
        {this.props.children}

        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}

export default Person;
