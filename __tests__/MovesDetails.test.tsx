import { render, screen } from '@testing-library/react'
import MovesDetails from '../components/MovesDetails'
import { within } from '@testing-library/dom'
import { IMove } from "../interfaces/IPokemon"

const testMoves: IMove[] = [
    {
        "move": {
            "name": "razor-wind",
            "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            }
        ]
    },

]


test("On render, check that moves is displayed correctly", () => {
    const { container } = render(
        <MovesDetails header="Moves" iterator={testMoves} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
})