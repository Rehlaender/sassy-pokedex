import React, { Component } from 'react';
import loading from './pokeball.png'; // Tell Webpack this JS file uses this image
import './Loading.css';

class Loading extends Component {
  render() {

    return (
      <div className="loadingContainer">
        <img className="Loading-logo" src={loading}/>
        loading...
      </div>
    );
  }
}

export default Loading;
