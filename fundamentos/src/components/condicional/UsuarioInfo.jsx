import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const user = props.user || {};
  const validUser = user && user.name;

  return (
    <div>
      <If value={validUser}>
        Seja bem-vindo(a) <strong>{user.name}</strong>!
        <Else>
          Seja bem-vindo(a) <strong>visitante</strong>!
        </Else>
      </If>
    </div>
  );
};
