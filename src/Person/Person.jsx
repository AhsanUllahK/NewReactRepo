import React from "react";
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
const Person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <h3>My name is {props.name}</h3>
      <h3 onClick={props.click}>and I am {props.age} old</h3>
      {props.children}

      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default Person;
