import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai() {
  //name age bool

  let name = "?";
  let age = 0;
  let bool = false;

  const fornecerInfos = (nameParam, ageParam, boolParam) => {
    console.log(name, age, bool);
    name = nameParam;
    age = ageParam;
    bool = boolParam;
  };

  return (
    <div>
      <span>{name},</span>
      <span> {age}</span>
      <span> {bool ? "Verdadeiro" : "Falso"}</span>
      <IndiretaFilho callback={fornecerInfos}></IndiretaFilho>
    </div>
  );
}
