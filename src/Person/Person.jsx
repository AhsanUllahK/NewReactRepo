import React from "react";
import "./Person.css";

const Person = (props) => {
  const age = Math.floor(Math.random() * 30);
  return (
    <div className="Person">

      <h3>My name is {props.name}</h3>
      <h3 onClick={props.click}>and I am {props.age} old</h3>
      {props.children}

      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
