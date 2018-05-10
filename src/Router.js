import React, { Component } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import {
  BrowserRouter as Routing,
  Route
} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Routing>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Routing>
    );
  }
}

export default Router;
