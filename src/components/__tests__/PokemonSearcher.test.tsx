import { render, screen } from '@solidjs/testing-library';
import PokemonSearcher from '../PokemonSearcher';
import pokemonAPI from '@/services/pokemonAPI';

vi.mock('../../services/pokemon')

describe('PokemonSearcher', () => {
  beforeEach(() => {
    pokemonAPI.pokemon.fetchPokemons.mockResolvedValue()
  })

  it('renders correctly', () => {
    render(<PokemonSearcher />)

    const label = screen.queryByText('Pokemon Searcher')

    expect(label).toBeInTheDocument()
  })
})