import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import Auxiliary from "../../../HOC/Auxilliary";
import withClass from "../../../HOC/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

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
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    const style = {
      "@media (min-width: 500px)": {
        width: "450px",
      },
    };

    console.log("[Person.js] is rendering........");
    return (
      <Auxiliary>
        {/* <AuthContext.Consumer>
          {(context) => {
            context.authenticated ? (
              <h3>Authenticated</h3>
            ) : (
              <h3>Please Login</h3>
            );
          }}
        </AuthContext.Consumer> */}

        {this.context.authenticated ? (
          <h3>Authenticated</h3>
        ) : (
          <h3>Please Login</h3>
        )}

        {/* // <div className="Person" style={style}> */}
        {/* <StyledDiv> */}

        <h3>My name is {this.props.name}</h3>
        <h3 onClick={this.props.click}>and I am {this.props.age} old</h3>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(input) => {
          //   this.inputElement = input;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* <h3>Hello there</h3> */}
        {/* </StyledDiv> */}
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;

// <React.Fragement></React.Fragement> works same as <Auxilliary></Auxiliary
// React.Fragement is a built in one.
// import React,{Fragment} from "./react";
