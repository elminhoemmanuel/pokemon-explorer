import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IFetch, IResult } from "../interfaces/IPokemon"
import Loader from './Loader';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

const PokemonList: React.FC = () => {

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

    const handleFetchAll = (load: boolean, err: string): void => {
        setFetchAll({
            loading: load,
            error: err
        })
    }

    const getPokemons = (): void => {
        handleFetchAll(true, "")
        axios
            .get(`pokemon/?offset=${currentCount}&limit=${pageLimit}`)
            .then(response => {
                handleSetResult(response.data)
                handleFetchAll(false, "")
            })
            .catch(error => {
                handleFetchAll(false, "Something went wrong, refresh page to try again")
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
            <h1 className="text-center py-4 font-bold text-2xl">List of Pokemons</h1>

            {fetchAll.loading && <Loader color="yellow" />}

            {
                !fetchAll.loading && !fetchAll.error &&
                <div className='grid grid-cols-1 gap-3'>
                    {
                        result?.results.map(item => (
                            <PokemonCard key={item.url} name={item.name} url={item.url} />
                        ))
                    }
                </div>
            }

            {!fetchAll.loading && fetchAll.error && <p className='text-red-500 text-center'>{fetchAll.error}</p>}

            {
                !fetchAll.loading && !fetchAll.error &&
                <div className='grid grid-cols-1 gap-3'>
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

export default PokemonList