import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcularFatorial(number) {
  if (number < 0) return -1;
  if (number === 1) return 1;
  return calcularFatorial(number - 1) * number;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState('Impar');

  useEffect(() => {
    setFatorial(calcularFatorial(number));
    setStatus(number % 2 === 0 ? 'par' : 'ímpar');
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1" />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial < 0 ? 'Não existe' : fatorial}
          </span>
        </div>

        <input
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          type="number"
          className="input"
        />
      </div>

      <SectionTitle title="Exercício #2" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
