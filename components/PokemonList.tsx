import React from 'react'
import { IPokemonsResult } from "../interfaces/IPokemon"
import PokemonCard from './PokemonCard'

type PokemonListProps = {
    result: IPokemonsResult[]
}

const PokemonList = ({ result }: PokemonListProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                result?.map(item => (
                    <PokemonCard key={item.url} name={item.name} url={item.url} />
                ))
            }
        </div>
    )
}

export default PokemonList