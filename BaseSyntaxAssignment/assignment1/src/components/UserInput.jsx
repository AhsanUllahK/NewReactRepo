import React from "react";

const UserInput = (props) => {
  const style = {
    border: "2px solid gray",
  };
  return (
    <div>
      <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName}
      />

    </div>
  );
};

export default UserInput;
