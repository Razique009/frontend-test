export const POKEAPI_URL = "https://pokeapi.co/api/v2"
export const POKEMON_COUNT = 898
export const MIN  = 1;
import axios from 'axios';

export const getPokemon = (id) => {
  const pokemon = axios.get(`${POKEAPI_URL}/pokemon/${id}`);
  return pokemon;
  // The URL for fetching a Pokemon is `${POKEAPI_URL}/pokemon/${id}`,
  // note that "id" can either be the name of a Pokemon or it's National Pokedex number.
  //
  // Add your implementation here
}  

export const getRandomPokemon = () => {
  const random = Math.floor(Math.random() * (POKEMON_COUNT - MIN + 1)) + MIN;
  const pokedex = axios.get(`${POKEAPI_URL}/pokedex/${1}`);
  return pokedex;
  // console.log('getRandomPokemon', getRandomPokemon); 
  // Using POKEMON_COUNT, generate a random number between 1 and the constants value
  // to fetch a Pokemon by it's National Pokedex number.
  //
  // Add your implementation here
}
