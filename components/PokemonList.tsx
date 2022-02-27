import React from 'react'
import { IResult } from "../interfaces/IPokemon"
import PokemonCard from './PokemonCard'

type PokemonListProps = {
    result: IResult
}

const PokemonList = ({ result }: PokemonListProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                result?.results?.map(item => (
                    <PokemonCard key={item.url} name={item.name} url={item.url} />
                ))
            }
        </div>
    )
}

export default PokemonList