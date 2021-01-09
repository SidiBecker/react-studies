import React from 'react';
import './Content.scss';
import { Switch, Route } from 'react-router-dom';

import Home from '../../view/examples/Home';
import About from '../../view/examples/About';
import Param from '../../view/examples/Param';
import NotFound from './NotFound';

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/param/:id" component={Param} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default Content;
