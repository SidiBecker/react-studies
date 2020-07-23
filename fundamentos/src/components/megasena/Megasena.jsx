import React, { useState } from "react";
import "./megasena.css";
import If, { Else } from "./../condicional/If";

export default (props) => {
  const [numbers, setNumbers] = useState([]);
  const [amount, setAmount] = useState(6);

  function gerarNumbers(qtde) {
    var numbers = [];

    while (numbers.length < qtde) {
      let randomNumber = getRandomNumber(1, 100);

      while (numbers.includes(randomNumber)) {
        randomNumber = getRandomNumber(1, 100);
      }

      numbers.push(randomNumber);
    }

    return setNumbers(numbers.sort((a, b) => a - b));
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const clear = () => {
    setNumbers([]);
  };

  const onKeyPress = (evt) => {
    debugger;

    evt.preventDefault();
  };

  return (
    <div className="megasena">
      <div>
        <label htmlFor={`inputAmount`}>Quantidade:</label>
        <input
          onKeyDown={onKeyPress}
          id={"inputAmount"}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            gerarNumbers(amount);
          }}
          type="number"
          min="4"
          max="20"
        />
      </div>
      <button onClick={(_) => gerarNumbers(amount)}>Gerar Números</button>
      <button disabled={numbers.length === 0} onClick={clear}>
        Limpar
      </button>
      <div>
        <If value={numbers.length > 1}>
          <div className="numbers">{numbers.join(" ")}</div>
          <Else>
            <div></div>
          </Else>
        </If>
      </div>
    </div>
  );
};
