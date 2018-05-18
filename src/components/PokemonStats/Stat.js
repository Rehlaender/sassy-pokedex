import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PokemonStats.css';

class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willGrow: false
    }

    this.returnValueAccordingToMax = this.returnValueAccordingToMax.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  returnValueAccordingToMax(statName, statValue) {
    switch (statName) {
      case 'hp':
        return (statValue / 255) * 100;
        break;
      case 'attack':
        return (statValue / 190) * 100;
        break;
      case 'defense':
        return (statValue / 230) * 100;
        break;
      case 'special-attack':
        return (statValue / 194) * 100;
        break;
      case 'special-defense':
        return (statValue / 230) * 100;
        break;
      case 'speed':
        return (statValue / 180) * 100;
        break;
      default:
        return 0;
    }
  }

  changeWidth() {
    setTimeout(() =>{
      this.setState({willGrow: true});
    }, 100);
  }

  componentDidMount() {
    this.changeWidth();
  }

  render() {

    let statBarWidth = {
      width: `${this.returnValueAccordingToMax(this.props.name, this.props.statValue)}%`,
    };

    const statBarWidth0 = {
      width: `0%`,
    };

    return (
      <div className="statBar">
        {this.props.name}
        <div className={`stat ${this.props.name}`} style={ (this.state.willGrow) ? statBarWidth : statBarWidth0}></div>
      </div>

    );
  }
}

export default Stat;

Stat.propTypes = {
};

Stat.defaultProps = {
    statValue: 65,
    name: "speed"
};
