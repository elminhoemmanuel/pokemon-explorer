import { render, screen } from '@testing-library/react'
import Loader from '../components/Loader'

test("On render, check that spinner is present", () => {
    render(<Loader color="yellow"/>);

    expect(screen.getByTestId("spinner"))
})
