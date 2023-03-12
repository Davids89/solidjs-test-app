import { PokemonBasicInfo } from "@/interfaces/pokemonBasicInfo"
import { PokemonSearchApiResponse } from "@/interfaces/pokemonSearchApiResponse";

async function fetchPokemons(): Promise<Array<PokemonBasicInfo>> {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20,&offset=0'

  const response = await fetch(url);

  const jsonResponse: PokemonSearchApiResponse = await response.json();

  return jsonResponse.results;
}

export { fetchPokemons }