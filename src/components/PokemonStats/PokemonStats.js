import React, { Component } from 'react';
import Stat from './Stat';

import PropTypes from 'prop-types';
import './PokemonStats.css';

class PokemonStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };

    this.renderStats = this.renderStats.bind(this);
  }

  renderStats() {
      return this.props.stats.map((stat, i) => {
        return (
          <Stat key={i} name={stat.stat.name} statValue={stat.base_stat}/>
      )
    });
  }

  render() {

    let stats = this.renderStats();
    return (
      <div className="statsContainer">
       {stats}
      </div>
    );
  }
}

export default PokemonStats;

PokemonStats.propTypes = {
};

PokemonStats.defaultProps = {
  stats: [
    {
      base_stat: 65,
      effort: 1,
      stat: {url: "https://pokeapi.co/api/v2/stat/6/", name: "speed"}
    },
  ]
};
