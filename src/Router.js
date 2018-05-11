import React, { Component } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import './App.css';

import {
  BrowserRouter as Routing,
  Route
} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <div id="mainWrapper">
        <div className="frontBox"></div>
        <Routing>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Routing>
      </div>
    );
  }
}

export default Router;
