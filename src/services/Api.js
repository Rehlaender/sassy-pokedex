import axios from 'axios';

const Api = {
  getPokemonById(pokemonId) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  }
};

export default Api;
