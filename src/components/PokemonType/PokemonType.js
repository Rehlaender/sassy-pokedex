import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokemonType.css';

class PokemonType extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };

    this.renderStats = this.renderStats.bind(this);
  }

  renderStats() {
      return this.props.types.map((stat, i) => {
        return (
          <div key={i}>
            {stat.stat.name}: {stat.base_stat}
          </div>
      )
    });
  }

  render() {

    let stats = this.renderStats();
    return (
      <div className="typesContainer">
       {types}
      </div>
    );
  }
}

export default PokemonType;

PokemonType.propTypes = {
};

PokemonType.defaultProps = {
  types: [
    {
      slot:1,
      type: {url: "https://pokeapi.co/api/v2/type/12/", name: "grass"}
    }
  ]
};
