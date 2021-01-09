import React from 'react';

import Menu from './../components/layout/Menu';
import Content from '../components/layout/Content';

import './App.scss';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export default App;
