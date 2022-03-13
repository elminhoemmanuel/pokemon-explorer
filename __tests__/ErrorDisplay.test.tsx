import { render, screen } from '@testing-library/react'
import ErrorDisplay from '../components/ErrorDisplay'

test("On render, check that error message is present", () => {
    render(<ErrorDisplay error="Something went wrong"/>);

    expect(screen.getByTestId("error-message"))
})
