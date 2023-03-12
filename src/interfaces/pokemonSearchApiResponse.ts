import { PokemonBasicInfo } from "./pokemonBasicInfo"

export interface PokemonSearchApiResponse {
  count: Number,
  next: String,
  previous?: String,
  results: Array<PokemonBasicInfo>
}