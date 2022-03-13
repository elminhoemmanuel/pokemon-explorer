import { render, screen } from '@testing-library/react'
import Pagination from '../components/Pagination'
import { within } from '@testing-library/dom'

test("On render, check back button is present", () => {
    const { getByTestId } = render(
        <Pagination
            next="https://pokeapi.co/api/v2/ability/?offset=40&limit=20"
            previous="https://pokeapi.co/api/v2/ability/?offset=0&limit=20"
            nextPage={():void=>{}}
            prevPage={():void=>{}}
        />
    );
    const { getByText } = within(screen.getByTestId('back-btn'))
    expect(getByText("Back")).toBeInTheDocument()
})

test("On render, check next button is present", () => {
    const { getByTestId } = render(
        <Pagination
            next="https://pokeapi.co/api/v2/ability/?offset=40&limit=20"
            previous="https://pokeapi.co/api/v2/ability/?offset=0&limit=20"
            nextPage={():void=>{}}
            prevPage={():void=>{}}
        />
    );
    const { getByText } = within(screen.getByTestId('next-btn'))
    expect(getByText("Next")).toBeInTheDocument()
})
