import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState([]);
  const [quantidade, setQuantidade] = useState(6);

  function gerarNumeros(qtde) {
    var numeros = [];

    while (numeros.length < qtde) {
      let numeroGerado = getRandomNumber(1, 100);
      console.log("numero gerado: " + numeroGerado);

      while (numeros.includes(numeroGerado)) {
        numeroGerado = getRandomNumber(1, 100);
      }

      numeros.push(numeroGerado);
    }

    return setNumeros(numeros);
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function play() {
    gerarNumeros(1);
  }

  return (
    <div>
      <div>
        <label htmlFor={`inputQuantidade`}>Quantidade:</label>
        <input
          id={"inputQuantidade"}
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          type="number"
        />
      </div>
      <button onClick={(_) => gerarNumeros(quantidade)}>Gerar Números</button>
      <div>
        <span>{numeros.sort((a, b) => a - b).toString()}</span>
      </div>
    </div>
  );
};
