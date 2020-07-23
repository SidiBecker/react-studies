import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Init");

  const onChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={valor} onChange={onChange} />
        <input value={valor} readOnly />
        <input />
      </div>
    </div>
  );
};
