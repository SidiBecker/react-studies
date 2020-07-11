import React from "react";
import products from "./../../data/products";

export default (props) => {
  function getLines() {
    return products.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.nome}</td>
          <td>R${product.preco.toFixed(2).replace('.', ',')}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLines()}</tbody>
      </table>
    </div>
  );
};
