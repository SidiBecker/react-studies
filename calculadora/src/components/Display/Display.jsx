import React from 'react';
import './display.scss';

export default (props) => {
  return (
    <div className="display">
      <span>{props.value}</span>
    </div>
  );
};
