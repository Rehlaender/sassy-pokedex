import axios from 'axios';

const Api = {
  getPokemonById(pokemonId) {
    const pokemonLowerCase = pokemonId.toLowerCase();
    const pokemonTrim = pokemonLowerCase.trim();
    const pokemonNoWhite = pokemonTrim.replace(/\s/g, "")
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNoWhite}/`);
  }
};

export default Api;
