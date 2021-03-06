import React, { Component } from 'react';
import './calculator.scss';

import Button from './../components/Button/Button';
import Display from './../components/Display/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = {
    ...initialState,
  };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(op) {

    if (this.state.current === 0) {
      this.setState({ operation: op, current: 1, clearDisplay: true });
    } else {
      const equals = op === '=';
      const currentOperation = this.state.operation

      const values = [...this.state.values];

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0]
      }

    
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDigit = (digit) => {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;

    const displayValue = currentValue + digit;

    this.setState({
      displayValue,
      clearDisplay: false,
    });

    if (digit !== '.') {

      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      const [values] = [this.state.values];
      values[index] = newValue;
      this.setState({ values });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button click={this.clearMemory} label="AC" type="triple" />
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
        <Button click={this.addDigit} label="." />
        <Button click={this.setOperation} type="operation" label="=" />
      </div>
    );
  }
}
