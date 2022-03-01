import React from 'react'
import { IStats } from 'interfaces/IPokemon'

type DetailsListProps = {
    header: string,
    iterator: IStats[]
}

const DetailsList = ({ header, iterator }: DetailsListProps) => {
    return (
        <div>
            <p><span className="font-bold underline text-lg">{header}</span> :</p>
            <div data-testid="stats-container" className="pl-4 mb-6">
                {
                    iterator?.map((item, x) => (
                        <p  key={item.stat.name} >{item.stat.name} - {item.base_stat}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailsList