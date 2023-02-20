import React from "react";

// HOC are just works as a wrapper(s)
// There are two ways of creating a HOC.

// FirstWay
// const WithClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );

// SecondWay


const WithClass = (WrappedComponent, className) => {
  return (props) => (
    <div className="className">
      <WrappedComponent />
    </div>
  );
};
export default WithClass;
