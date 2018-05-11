import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonImageClicker from '../PokemonImageClicker/PokemonImageClicker';

class IddlePokemon extends Component {
  render() {
    return (
      <div>
        <div>
          <PokemonImageClicker sprites={this.props.sprites} gender="male" />
        </div>
      </div>
    );
  }
}

export default IddlePokemon;

IddlePokemon.propTypes = {
  sprites: PropTypes.object
};

IddlePokemon.defaultProps = {
  sprites: {
    "back_female": "https://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "https://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "https://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "https://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "https://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "https://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "https://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "https://pokeapi.co/media/sprites/pokemon/shiny/12.png"
  }
};
