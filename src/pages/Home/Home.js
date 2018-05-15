import React, { Component } from 'react';
import './Home.css';

import IddlePokemon from '../../components/IddlePokemon/IddlePokemon';
import CardContainer from '../../components/CardContainer/CardContainer';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import SearchButton from '../../components/SearchButton/SearchButton';

import Api from '../../services/Api.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foundPokemon: {}
    }

    this.searchPokemon = this.searchPokemon.bind(this);
  }

  searchPokemon(pokemon) {
      Api.getPokemonById(pokemon).then( response => {
        console.log((response.data), 'lel' );
        this.setState({foundPokemon: response.data})
      })
      .catch((error) => {
        console.log(error, '=== error');
      });
  }

  render() {
    return (
      <div className="Home mainContainer">
        <SearchPokemon searchPokemon={this.searchPokemon} />
        <div className="screenContainer">
          <CardContainer
            foundPokemon={this.state.foundPokemon}/>
        </div>
        <SearchButton />
      </div>
    );
  }
}

export default Home;
