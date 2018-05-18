import React, { Component } from 'react';
import error from './error.png'; // Tell Webpack this JS file uses this image
import './Error.css';

class Error extends Component {
  render() {

    return (
      <div className="errorContainer">
        <img className="Error-logo" src={error}/>
        <p>"Pokemon not found"</p>
      </div>
    );
  }
}

export default Error;
