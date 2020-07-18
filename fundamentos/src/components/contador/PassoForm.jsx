import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor={`inputPasso${props.passo}`}>Passo:</label>
      <input
        id={`inputPasso${props.passo}`}
        value={props.passo}
        onChange={props.setPasso}
        maxLength="3"
      />
    </div>
  );
};
