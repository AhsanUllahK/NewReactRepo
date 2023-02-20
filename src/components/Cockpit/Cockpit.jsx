import React, { useEffect } from "react";

const Cockpit = (props) => {
  const classes = [];

  useEffect(() => {
    console.log("[Cockpit.js] useEffect..........");

    setTimeout(() => {
      alert("Saved Data to CLoud...");
    }, 1000);

    return () => {
      console.log("[Cockpit.js] Cleanup work");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect..........");

    return () => {
      console.log("[Cockpit.js] 2nd Cleanup work");
    };
  });

  // let is es6 version of var

  if (props.personsLength <= 2) {
    classes.push("red");
  }

  if (props.personsLength <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <h2 className={classes.join(" ")}>This is really working</h2>
      <button className="button" onClick={props.clicked}>
        Toggle showname
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
