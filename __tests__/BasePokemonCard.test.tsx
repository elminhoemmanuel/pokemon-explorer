import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import BasePokemonCard from '../components/BasePokemonCard'

const getEachPokemon = (val: string): void => {
}

test("On render, check that pokemon name is displayed correctly", () => {
    const { getByTestId } = render(<BasePokemonCard
        name="Ivysaur"
        url="https://pokeapi.co/api/v2/pokemon/2"
        getEachPokemon={getEachPokemon}
        fetchEach={{ loading: false, error: "" }}
    />);
    const { getByText } = within(screen.getByTestId('pokemon-name'))
    expect(getByText("Ivysaur")).toBeInTheDocument()
})

test("On render, check that getPokemon button is present", () => {
    render(<BasePokemonCard
        name="Ivysaur"
        url="https://pokeapi.co/api/v2/pokemon/2"
        getEachPokemon={getEachPokemon}
        fetchEach={{ loading: false, error: "" }}
    />);
    expect(screen.getByTestId("getPokemon-btn"))
})

test("On render, check that pokemon specie is displayed correctly", () => {
    const { getByTestId } = render(
        <BasePokemonCard name="Ivysaur" url="https://pokeapi.co/api/v2/pokemon/2" getEachPokemon={getEachPokemon} fetchEach={{ loading: false, error: "" }}>
            <p data-testid="pokemon-species"><span className="font-bold underline text-lg  mb-6">Species</span> bulbasaur</p>
        </BasePokemonCard>
    );
    const { getByText } = within(screen.getByTestId('pokemon-species'))
    expect(getByText("bulbasaur")).toBeInTheDocument()
})

test("On render, check that pokemon weight is displayed correctly", () => {
    const { getByTestId } = render(
        <BasePokemonCard name="Ivysaur" url="https://pokeapi.co/api/v2/pokemon/2" getEachPokemon={getEachPokemon} fetchEach={{ loading: false, error: "" }}>
            <p data-testid="pokemon-weight"><span className="font-bold underline text-lg  mb-6">Weight</span> 69</p>
        </BasePokemonCard>
    );
    const { getByText } = within(screen.getByTestId('pokemon-weight'))
    expect(getByText("69")).toBeInTheDocument()
})
