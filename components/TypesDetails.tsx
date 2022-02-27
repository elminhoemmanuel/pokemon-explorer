import React from 'react'
import { IType } from 'interfaces/IPokemon'

type TypesListProps = {
    header: string,
    iterator: IType[]
}

const TypesList = ({ header, iterator }: TypesListProps) => {
    return (
        <div>
            <p><span className="font-bold underline text-lg">{header}</span> :</p>
            <div className="pl-4 mb-6">
                {
                    iterator?.map(item => (
                        <p key={item.type.name} >{item.type.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default TypesList