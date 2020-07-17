import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai() {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [bool, setBool] = useState(false);

  const fornecerInfos = (name, age, bool) => {
    setName(name);
    setAge(age);
    setBool(bool);
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
