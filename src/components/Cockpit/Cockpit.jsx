import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import authContext from "./../../context/auth-context";

const Cockpit = (props) => {
  const classes = [];

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect..........");

    const timer = setTimeout(() => {
      alert("Saved Data to Cloud...");
    }, 2000);
    toggleBtnRef.current.click();

    return () => {
      clearTimeout(timer);
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
      <button ref={toggleBtnRef} className="button" onClick={props.clicked}>
        Toggle showname
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}

      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
