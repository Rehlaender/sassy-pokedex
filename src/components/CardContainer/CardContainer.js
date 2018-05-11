import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';

class CardContainer extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardContent">
          <div>{this.props.id}</div>
          <div>- pokemonimage</div>
          <div>- poketype</div>
          <div>- pokeinfo</div>
          <div>- pokemonstats</div>
        </div>
      </div>
    );
  }
}

export default CardContainer;

CardContainer.propTypes = {
  id: PropTypes.number,
  sprites: PropTypes.object,
  types: PropTypes.array,
  stats: PropTypes.array,
  weigth: PropTypes.number,
  height: PropTypes.number
};

CardContainer.defaultProps = {
  id: 1,
  weight: 69,
  height: 7,
  "types": [
      {
          "slot": 2,
          "type": {
              "url": "https://pokeapi.co/api/v2/type/4/",
              "name": "poison"
          }
      },
      {
          "slot": 1,
          "type": {
              "url": "https://pokeapi.co/api/v2/type/12/",
              "name": "grass"
          }
      }
  ],
  stats: [
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/6/",
              "name": "speed"
          },
          "effort": 0,
          "base_stat": 45
      },
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/5/",
              "name": "special-defense"
          },
          "effort": 0,
          "base_stat": 65
      },
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/4/",
              "name": "special-attack"
          },
          "effort": 1,
          "base_stat": 65
      },
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/3/",
              "name": "defense"
          },
          "effort": 0,
          "base_stat": 49
      },
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/2/",
              "name": "attack"
          },
          "effort": 0,
          "base_stat": 49
      },
      {
          "stat": {
              "url": "https://pokeapi.co/api/v2/stat/1/",
              "name": "hp"
          },
          "effort": 0,
          "base_stat": 45
      }
  ],
  sprites: {
    "back_female": "https://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "https://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "https://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "https://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "https://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "https://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "https://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "https://pokeapi.co/media/sprites/pokemon/shiny/12.png"
  },
};
