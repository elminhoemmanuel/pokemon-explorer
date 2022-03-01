import { render, screen } from '@testing-library/react'
import TypesDetails from '../components/TypesDetails'
import { within } from '@testing-library/dom'
import { IType } from "../interfaces/IPokemon"

const testTypes: IType[] = [
    {
        "slot": 1,
        "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
        }
    },
    {
        "slot": 2,
        "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
        }
    }

]



test("On render, check that types is displayed correctly", () => {
    const { container } = render(
        <TypesDetails header="Types" iterator={testTypes} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})