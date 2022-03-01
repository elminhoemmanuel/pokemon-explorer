import React from 'react'
import { IMove } from 'interfaces/IPokemon'

type MovesListProps = {
    header:string,
    iterator: IMove[]
}

const MovesList = ({ header, iterator }:MovesListProps) => {
    return (
        <div>
            <p><span className="font-bold underline text-lg">{header}</span> :</p>
            <div data-testid="moves-container" className="pl-4 mb-6">
                {
                    iterator?.map(item => (
                        <p key={item.move.name} >{item.move.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default MovesList