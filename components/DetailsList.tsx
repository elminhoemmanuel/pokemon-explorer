import React from 'react'
import { IMove, IStats, IType } from 'interfaces/IPokemon'

type DetailsListProps = {
    header:string,
    iterator: IMove[] | IStats[] | IType[]
}

const DetailsList = ({ header, iterator }:DetailsListProps) => {
    return (
        <div>
            <p><span className="font-bold underline text-lg">{header}</span> :</p>
            <div className="pl-4 mb-6">
                {
                    iterator?.map(item => (
                        <p key={item.move.name} >{item.move.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailsList