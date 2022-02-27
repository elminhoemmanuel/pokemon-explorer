import React, { useState } from 'react'
import { IPokemonsResult, IFetch, IPokemonDetails } from "../interfaces/IPokemon"
import axios from 'axios'
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';
import SecBtn from './SecBtn';
import Image from 'next/image';
import BasePokemonCard from './BasePokemonCard';
import PokemonImage from './PokemonImage';

const PokemonCard = ({ name, url }: IPokemonsResult) => {

    const [fetchEach, setFetchEach] = useState<IFetch>({ loading: false, error: "" });
    const [imgUrl, setImgUrl] = useState("");
    const [details, setDetails] = useState<IPokemonDetails | null>(null);
    const [showMore, setShowMore] = useState(false);

    const handleFetchEach = (load: boolean, err: string,
        toggle: boolean, data: IPokemonDetails, img: string): void => {
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
        handleFetchEach(true, "", false, {} as IPokemonDetails, "")
        axios
            .get(url)
            .then(res => {
                handleFetchEach(false, "", true, res.data, res.data.sprites.front_default)
            })
            .catch(err => {
                handleFetchEach(false, "Something went wrong, refresh page to try again", false, {} as IPokemonDetails, "")
            });
    }



    return (
        <div>
            {/* Initial Pokemon card */}
            {
                !fetchEach.loading && !fetchEach.error && !showMore &&
                <BasePokemonCard name={name} url={url} getEachPokemon={getEachPokemon} fetchEach={fetchEach} />
            }

            {/* Pokemon Card when details are being loaded */}
            {
                fetchEach.loading && !fetchEach.error &&
                <BasePokemonCard name={name} url={url} getEachPokemon={getEachPokemon} fetchEach={fetchEach} />
            }

            {/* Pokemon Card when there is an error in loading details */}
            {
                fetchEach.error &&
                <BasePokemonCard name={name} url={url} getEachPokemon={getEachPokemon} fetchEach={fetchEach} ><div>{!fetchEach.loading && fetchEach.error && <ErrorDisplay error={fetchEach?.error} />}</div> </BasePokemonCard>
            }

            {/* Pokemon Card when details have been fetched */}
            {
                !fetchEach.loading && !fetchEach.error && showMore &&
                <BasePokemonCard name={name} url={url} getEachPokemon={getEachPokemon} fetchEach={fetchEach} >
                    <div className="py-2">
                        <PokemonImage imgUrl={imgUrl} />
                        <div>
                            {details?.species && <p><span className="font-bold underline text-lg  mb-6">Species</span> : {details.species.name}</p>}

                            <p><span className="font-bold underline text-lg">Stats</span> :</p>
                            <div className="pl-4 mb-6">
                                {
                                    details?.stats?.map(item => (
                                        <p key={item.stat.name} >{item.stat.name} - {item.base_stat}</p>
                                    ))
                                }
                            </div>

                            <p><span className="font-bold underline text-lg">Types</span> :</p>
                            <div className="pl-4 mb-6">
                                {
                                    details?.types?.map(item => (
                                        <p key={item.type.name} >{item.type.name}</p>
                                    ))
                                }
                            </div>

                            <p><span className="font-bold underline text-lg">Moves</span> :</p>
                            <div className="pl-4 mb-6">
                                {
                                    details?.moves?.map(item => (
                                        <p key={item.move.name} >{item.move.name}</p>
                                    ))
                                }
                            </div>

                            <p><span className="font-bold underline text-lg mb-6">Weight</span> : {details?.weight}</p>
                        </div>
                    </div>
                </BasePokemonCard>
            }

        </div>
    )
}

export default PokemonCard