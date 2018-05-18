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
      foundPokemon: {},
      showSearch: false,
      isLoading: false,
      errors: false,
      pokemon: ''
    }

    this.searchPokemon = this.searchPokemon.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.toggleErrors = this.toggleErrors.bind(this);
  }

  searchPokemon(pokemon) {
      this.setState({pokemon});
      this.toggleLoading(true);
      Api.getPokemonById(pokemon).then( response => {
        this.toggleLoading(false);
        this.toggleErrors(false);
        this.setState({foundPokemon: response.data});
      })
      .catch((error) => {
        this.toggleLoading(false);
        this.toggleErrors(true);
      });
  }

  showSearch() {
    this.setState({showSearch: !this.state.showSearch});
  }

  toggleErrors(value) {
    this.setState({errors: value});
  }

  toggleLoading(value) {
    this.setState({isLoading: value});
    ('is isLoading?', this.state.isLoading);
  }

  render() {
    return (
      <div className="Home mainContainer">
        <div className="redBar"></div>
        <SearchPokemon
          showSearch={this.state.showSearch}
          toggleSearchBar={this.showSearch}
          searchPokemon={this.searchPokemon} />
        <div className="screenContainer">
          <CardContainer
            foundPokemon={this.state.foundPokemon}
            isLoading={this.state.isLoading}
            errors={this.state.errors}
            pokemon={this.state.pokemon} />
        </div>
        <SearchButton showSearch={this.showSearch} />
      </div>
    );
  }
}

export default Home;
