import { render, screen } from '@testing-library/react'
import PokemonApp from '../components/PokemonApp'

describe('PokemonApp', () => {
  it('renders a heading', () => {

    render(<PokemonApp />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })
})
