import React, { Component } from 'react';
import './Home.css';

import IddlePokemon from '../../components/IddlePokemon/IddlePokemon';

import CardContainer from '../../components/CardContainer/CardContainer';

import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';


class Home extends Component {
  render() {
    return (
      <div className="Home mainContainer">
        <SearchPokemon />
        <div className="screenContainer">
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default Home;
