import { Component, createResource, For, createEffect } from 'solid-js';
import pokemonAPI from '@/services/pokemonAPI';

const PokemonSearcher: Component = () => {
  const [pokemons] = createResource(pokemonAPI.pokemon.fetchPokemons)

  function showPokemonImage (url: String): JSX.Element{
    const pokemonId = url.split('/').filter(Boolean).slice(-1)[0]
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    return (
      <img src={spriteUrl}></img>
    )
  }

  return (
    <>
      <span>Pokemon Searcher</span>

      {pokemons() && (
        <For each={pokemons()}>
          {(pokemon) => (showPokemonImage(pokemon.url))}
        </For>
      )}
    </>
  )
}

export default PokemonSearcher