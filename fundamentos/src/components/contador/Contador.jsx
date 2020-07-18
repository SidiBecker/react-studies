import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passo || 5,
  };

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    const value = e.target.value;

    if(this.state.passo === 0){}

    this.setState({
      passo: value ? parseInt(e.target.value) : 0,
    });
  };

  render() {
    return (
      <div>
        <p>Passo:{this.state.passo}</p>
        <div>
          <label htmlFor={`inputPasso${this.state.passo}`}></label>
          <input
            id={`inputPasso${this.state.passo}`}
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <p>Valor:{this.state.numero}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <hr></hr>
      </div>
    );
  }
}
