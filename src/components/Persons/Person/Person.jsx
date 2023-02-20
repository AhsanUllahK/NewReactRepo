import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import Auxiliary from "../../../HOC/Auxilliary";
import withClass from "../../../HOC/withClass";

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
      <Auxiliary>
        {/* // <div className="Person" style={style}> */}
        {/* <StyledDiv> */}
        <h3>My name is {this.props.name}</h3>,
        <h3 onClick={this.props.click}>and I am {this.props.age} old</h3>,
        <p>{this.props.children}</p>,
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <h3>Hello there</h3>
        {/* </StyledDiv> */}
      </Auxiliary>
    );
  }
}

export default withClass(Person, classes.Person);

// <React.Fragement></React.Fragement> works same as <Auxilliary></Auxiliary
// React.Fragement is a built in one.
// import React,{Fragment} from "./react";
