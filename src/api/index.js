export const POKEAPI_URL = "https://pokeapi.co/api/v2"
export const POKEMON_COUNT = 898

export const getPokemon = (id) => {
  // The URL for fetching a Pokemon is `${POKEAPI_URL}/pokemon/${id}`,
  // note that "id" can either be the name of a Pokemon or it's National Pokedex number.
  //
  // Add your implementation here
}

export const getRandomPokemon = () => {
  // Using POKEMON_COUNT, generate a random number between 1 and the constants value
  // to fetch a Pokemon by it's National Pokedex number.
  //
  // Add your implementation here
}
