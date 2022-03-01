import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

const handleSearchText = (text: string): void => {
}

describe('Navbar', () => {
  it('renders a heading', () => {

    render(<Navbar handleSearchText={handleSearchText} />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })
})

test("On render, that Navbar contains search input field", () => {
    render(<Navbar handleSearchText={handleSearchText} />)

    expect(screen.getByTestId("search-input"))
})
