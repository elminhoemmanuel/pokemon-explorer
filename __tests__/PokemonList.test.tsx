import { render, screen } from '@testing-library/react'
import PokemonList from '../components/PokemonList'

describe('PokemonList', () => {
  it('renders a heading', () => {

    render(<PokemonList />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })
})
