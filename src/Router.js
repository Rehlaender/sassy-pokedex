import React, { Component } from 'react';

import Home from './pages/Home/Home';

import './App.css';

import {
  BrowserRouter as Routing,
  Route
} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <div id="mainWrapper">
        <Routing>
          <div className="App">
            <Route path="*" component={Home} />
          </div>
        </Routing>
      </div>
    );
  }
}

export default Router;
