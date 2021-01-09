import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Ops! Não há nada para ver aqui.</h1>
      <h2>
        <Link to="/" as="a">
          Voltar para o início
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
