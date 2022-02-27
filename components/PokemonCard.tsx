import React, { useState } from 'react'
import { IPokemonsResult, IFetch, IPokemonDetails } from "../interfaces/IPokemon"
import axios from 'axios'
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';
import BasePokemonCard from './BasePokemonCard';
import PokemonImage from './PokemonImage';
import MovesDetails from "./MovesDetails"
import TypesDetails from "./TypesDetails"
import StatsDetails from "./StatsDetails"


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

            {/* Pokemon Card when details have been loaded successfully */}
            {
                !fetchEach.loading && !fetchEach.error && showMore &&
                <BasePokemonCard name={name} url={url} getEachPokemon={getEachPokemon} fetchEach={fetchEach} >
                        <PokemonImage imgUrl={imgUrl} />
                        <div>
                            {details?.species && <p><span className="font-bold underline text-lg  mb-6">Species</span> : {details?.species.name}</p>}

                            { details?.stats && <StatsDetails header="Stats" iterator={details?.stats} /> }

                            { details?.types && <TypesDetails header="Types" iterator={details?.types} /> }

                            { details?.moves && <MovesDetails header="Moves" iterator={details?.moves} /> }

                            { details?.weight && <p><span className="font-bold underline text-lg mb-6">Weight</span> : {details?.weight}</p> }
                        </div>
                </BasePokemonCard>
            }

        </div>
    )
}

export default PokemonCard