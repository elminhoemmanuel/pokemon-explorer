import React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonImage from '../components/PokemonImage';

test("On render, check that Logo image is present and has alt text for accessibility", () => {
    render(<PokemonImage imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />);

    expect(screen.getByAltText("pokemon image"))
});
