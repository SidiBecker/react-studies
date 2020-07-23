import React, { Component } from "react";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";
import "./contador.css";

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
    debugger;
    if (value.length <= 3) {
      this.setState({
        passo: value ? parseInt(value) : 0,
      });
    }
  };

  render() {
    return (
      <div className="contador">
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Display numero={this.state.numero} />
        <Botoes onIncrement={this.increment} onDecrement={this.decrement} />
        <hr></hr>
      </div>
    );
  }
}
