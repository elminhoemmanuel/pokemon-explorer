import React, { useState } from 'react'
import { IPokemonsResult, IFetch, IPokemonDetails } from "../interfaces/IPokemon"
import axios from 'axios'
import Loader from './Loader';

const PokemonCard = ({ name, url }: IPokemonsResult) => {

    const [fetchEach, setFetchEach] = useState<IFetch>({ loading: false, error: "" });
    const [imgUrl, setImgUrl] = useState("");
    const [details, setDetails] = useState<IPokemonDetails>({} as IPokemonDetails);
    const [showMore, setShowMore] = useState(false);

    const handleFetchEach = (load: boolean, err: string, 
        toggle: boolean, data: IPokemonDetails, img:string ): void => {
        setFetchEach({
            loading: load,
            error: err
        })
        setShowMore(toggle)
        setDetails({
            species: data.species,
            stats: data.stats,
            types: data.types,
            weight: data.weight,
            moves: data.moves,
        })
        setImgUrl(img)
    }

    const getEachPokemon = (url: string): void => {
        handleFetchEach(true, "", false, {} as IPokemonDetails, "" )
        axios
            .get(url)
            .then(res => {
                handleFetchEach(false, "", true, res.data, res.data.sprites.front_default)
            })
            .catch(err => {
                handleFetchEach(false, "Something went wrong, refresh page to try again", false, {} as IPokemonDetails, "" )
            });
    }

    

    return (
        <button onClick={()=>{getEachPokemon(url)}}
        className='text-sm block w-full p-3 text-white font-bold  bg-pokyellow border-4 border-pokblue rounded-md'>
            <p className="font-bold underline text-lg mb-2">{name}</p>
            <p>Click to find out more</p>

            {fetchEach.loading && <Loader color="white" />}

            {
                !fetchEach.loading && !fetchEach.error && showMore &&

                <div className="py-2">
                    <div className="flex items-center justify-center"><img className="h-16 w-16 rounded my-2" src={imgUrl} alt="pokemon image" /></div>
                    <div>
                        { details.species && <p><span className="font-bold underline text-lg  mb-6">Species</span> : {details.species.name}</p> }

                        <p><span className="font-bold underline text-lg">Stats</span> :</p>
                        <div className="pl-4 mb-6">
                            {
                                details?.stats?.map(item =>(
                                    <p>{item.stat.name} - {item.base_stat}</p>
                                ))
                            }
                        </div>

                        <p><span className="font-bold underline text-lg">Types</span> :</p>
                        <div className="pl-4 mb-6">
                            {
                                details?.types?.map(item =>(
                                    <p>{item.type.name}</p>
                                ))
                            }
                        </div>

                        <p><span className="font-bold underline text-lg">Moves</span> :</p>
                        <div className="pl-4 mb-6">
                            {
                                details?.moves?.map(item =>(
                                    <p>{item.move.name}</p>
                                ))
                            }
                        </div>

                        <p><span className="font-bold underline text-lg mb-6">Weight</span> : {details?.weight}</p>
                    </div>
                </div>
            }

            {!fetchEach.loading && fetchEach.error && <p className='text-red-500 text-center'>{fetchEach.error}</p>}
        </button>
    )
}

export default PokemonCard