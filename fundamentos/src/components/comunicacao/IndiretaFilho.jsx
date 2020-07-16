import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.callback("Joao", 54, true)}>
        Fornecer Informações
      </button>
    </div>
  );
}
