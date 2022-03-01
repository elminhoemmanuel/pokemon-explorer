import { render, screen } from '@testing-library/react'
import StatsDetails from '../components/StatsDetails'
import { within } from '@testing-library/dom'
import { IStats } from "../interfaces/IPokemon"

const testStat: IStats[] = [
    {
        base_stat: 45,
        effort: 0,
        stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
        }
    },
    {
        base_stat: 49,
        effort: 0,
        stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
        }
    }
]

test("On render, check that stats is displayed correctly", () => {
    const { container } = render(
        <StatsDetails header="Stats" iterator={testStat} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})