import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('');

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício 1" />

      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 10)}
          >
            + 10
          </button>
          <button className="btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício 2" />
      <input
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        type="text"
        className="input"
      />
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
