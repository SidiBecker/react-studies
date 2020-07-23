import React, { Component, useState } from "react";
import "./calculator.scss";

import Button from "./../components/Button/Button";
import Display from "./../components/Display/Display";

export default class Calculator extends Component {
  state = {
    value: 0,
  };

  clearMemory() {
    console.log("Memory now is clear!");
  }

  setOperation(op) {
    console.log(`Operation is ${op}`);
  }

  addDigit = (n) => {
    this.setState({
      value: parseFloat(this.state.value.toString() + n),
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.value} />
        <Button click={this.clearMemory} label="AC" />
        <Button click={this.setOperation} type="operation" label="/" />
        <Button click={this.addDigit} label="7" />
        <Button click={this.addDigit} label="8" />
        <Button click={this.addDigit} label="9" />
        <Button click={this.setOperation} type="operation" label="*" />
        <Button click={this.addDigit} label="4" />
        <Button click={this.addDigit} label="5" />
        <Button click={this.addDigit} label="6" />
        <Button click={this.setOperation} type="operation" label="-" />
        <Button click={this.addDigit} label="1" />
        <Button click={this.addDigit} label="2" />
        <Button click={this.addDigit} label="3" />
        <Button click={this.setOperation} type="operation" label="+" />
        <Button click={this.addDigit} type="double" label="0" />
        <Button click={this.addDigit} label="." /> {/*TODO: */}
        <Button click={this.setOperation} type="operation" label="=" />
      </div>
    );
  }
}
