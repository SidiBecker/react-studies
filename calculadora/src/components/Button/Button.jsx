import React from "react";
import "./button.scss";

export default (props) => {
  let classes = "button";
  classes += `${props.type ? ` ${props.type}` : ""}`;
  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  );
};
