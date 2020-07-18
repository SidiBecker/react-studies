import React from "react";

export default (props) => {
  const getLines = () => {
    return props.value.map((value, index) => {
      const par = value % 2 === 0;
      return (
        <div key={index}>
          O número {value} é <strong>{par ? "par" : "ímpar"}</strong>.
        </div>
      );
    });
  };

  return <div>{getLines()}</div>;
};
