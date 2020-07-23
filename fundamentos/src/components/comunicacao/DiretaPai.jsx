import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai() {
  return (
    <div>
      <DiretaFilho name="Carlos" age="20" bool={true}></DiretaFilho>
      <DiretaFilho name="Daniel" age="17" bool={false}></DiretaFilho>
    </div>
  );
}
