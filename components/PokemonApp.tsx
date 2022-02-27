import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IFetch, IResult } from "../interfaces/IPokemon"
import Loader from './Loader';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import ErrorDisplay from './ErrorDisplay';
import PokemonList from './PokemonList';

const PokemonApp: React.FC = () => {

    const [pageLimit, setPageLimit] = useState(16);
    const [currentCount, setCurrentCount] = useState(0);
    const [fetchAll, setFetchAll] = useState<IFetch>({ loading: true, error: "" });
    const [result, setResult] = useState<IResult>({} as IResult);

    const handleSetResult = (res: IResult): void => {
        setResult({
            count: res.count,
            next: res.next,
            previous: res.previous,
            results: res.results
        })
    }

    const handleFetchAll = (load: boolean, err: string, res: IResult): void => {
        setFetchAll({
            loading: load,
            error: err
        })
        handleSetResult(res)
    }

    const getPokemons = (): void => {
        handleFetchAll(true, "", {} as IResult)
        axios
            .get(`pokemon/?offset=${currentCount}&limit=${pageLimit}`)
            .then(response => {
                handleFetchAll(false, "", response.data)
            })
            .catch(error => {
                handleFetchAll(false, "Something went wrong, refresh page to try again", {} as IResult)
            });
    }

    const nextPage = ():void =>{
        setCurrentCount((prev)=>prev + pageLimit)
    }

    const prevPage = ():void =>{
        setCurrentCount((prev)=>prev - pageLimit)
    }

    useEffect(() => {
        getPokemons()
    }, [currentCount])


    return (
        <div className="px-5 md:px-10 lg:px-16 py-12">
            <h1 className="text-center py-4 font-bold text-2xl text-white">List of Pokemons</h1>

            {fetchAll.loading && <Loader color="yellow" />}

            {
                !fetchAll.loading && !fetchAll.error && <PokemonList result={result} />
            }

            {!fetchAll.loading && fetchAll.error && <ErrorDisplay error={fetchAll?.error} />}

            {
                !fetchAll.loading && !fetchAll.error &&
                <div className=''>
                    <Pagination
                        next={result?.next}
                        previous={result?.previous}
                        nextPage={nextPage}
                        prevPage={prevPage}

                    />
                </div>
            }
        </div>
    )
}

export default PokemonApp