import React, { Component } from 'react';

import './CardContainer.css';

import PokemonStats from '../../components/PokemonStats/PokemonStats';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIsLoaded: false
    };

    this.returnImageProp = this.returnImageProp.bind(this);
  }

  returnImageProp() {
    return this.props.foundPokemon.sprites.front_default;
  }

  componentWillUpdate(nextProps) {
    if(!this.state.imageIsLoaded && nextProps.foundPokemon.id) {
      this.setState({imageIsLoaded: true});
    }
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="cardContent">
          <div className="pokemonId">{this.props.foundPokemon.id}</div>
          <div className="pokemonName">{this.props.foundPokemon.name}</div>
          <img className="pokemonSprite" src={
            (this.state.imageIsLoaded) ? this.returnImageProp() : ''
          }
          />
          <PokemonStats stats={(this.state.imageIsLoaded) ? this.props.foundPokemon.stats : []} />
        </div>
      </div>
    );
  }
}

export default CardContainer;
