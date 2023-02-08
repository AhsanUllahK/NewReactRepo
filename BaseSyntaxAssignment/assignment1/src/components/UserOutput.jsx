import React from "react";

import "./outputStyle.css";

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.name} Paragraph1</p>
      <p>Paragraph2.</p>
    </div>
  );
};

export default UserOutput;
