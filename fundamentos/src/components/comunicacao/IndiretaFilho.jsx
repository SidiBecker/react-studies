import React from "react";

export default function IndiretaFilho(props) {

  const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
  const gerarBool = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.callback("Joao", gerarIdade(), gerarBool())}>
        Fornecer Informações
      </button>
    </div>
  );
}
