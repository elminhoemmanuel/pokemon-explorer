import React from 'react'
import SecBtn from './SecBtn';
import Loader from './Loader';
import { IFetch } from "../interfaces/IPokemon"

type BasePokemonCardProps = {
    name:string,
    url:string,
    getEachPokemon:(val:string)=>void,
    fetchEach:IFetch
} & React.ComponentProps<'div'>

const BasePokemonCard = ({ name, url, getEachPokemon, fetchEach, children }:BasePokemonCardProps) => {
    return (
        <div className='text-sm w-full p-6 text-white font-bold  bg-pokyellow border-4 border-pokblue rounded-md'>
            <p className="font-bold capitalize text-xl mb-2">{name}</p>

            <div className='my-3'>
                <SecBtn onClick={() => { getEachPokemon(url) }}>{fetchEach?.loading ? <Loader color="white" /> : "Click to find out more"}</SecBtn>
            </div>
            {children}
        </div>
    )
}

export default BasePokemonCard