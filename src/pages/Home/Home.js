import React, { Component } from 'react';
import './Home.css';

import IddlePokemon from '../../components/IddlePokemon/IddlePokemon';
import CardContainer from '../../components/CardContainer/CardContainer';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import SearchButton from '../../components/SearchButton/SearchButton';

class Home extends Component {
  render() {
    return (
      <div className="Home mainContainer">
        <SearchPokemon />

        <div className="screenContainer">
          <CardContainer />
        </div>

        <SearchButton />
      </div>
    );
  }
}

export default Home;
