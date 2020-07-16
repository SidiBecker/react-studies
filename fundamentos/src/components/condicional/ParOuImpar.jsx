import React from "react";

export default (props) => {
  const getLines = () => {
    return props.value.map((value) => {
      debugger
      const par = value % 2 === 0;
      return (
        <div>
          O número {value} é <strong>{par ? "par" : "ímpar"}</strong>.
        </div>
      );
    });
  };

  return <div>{getLines()}</div>;
};
