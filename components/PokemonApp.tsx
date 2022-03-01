import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IFetch, IResult, ISearchParams } from "../interfaces/IPokemon"
import Loader from './Loader';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import ErrorDisplay from './ErrorDisplay';
import PokemonList from './PokemonList';
import Navbar from './Navbar';

const PokemonApp: React.FC = () => {

    const minText = 3
    const [pageLimit, setPageLimit] = useState(16);
    const [currentCount, setCurrentCount] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [fetchAll, setFetchAll] = useState<IFetch>({ loading: true, error: "" });
    const [searchTerms, setSearchTerms] = useState<ISearchParams>({ name: "", id: 0, loading:false, error:"" });
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

    const handleSearchResult = (load: boolean, err: string, name: string, id: number): void => {
        setSearchTerms({ name: name, id: id, loading:load, error:err })
    }

    const handleSearchText = (text: string): void => {
        setSearchText(text)
    }

    const getPokemons = useCallback(
        (): void => {
            handleFetchAll(true, "", {} as IResult)
            axios
                .get(`pokemon/?offset=${currentCount}&limit=${pageLimit}`)
                .then(response => {
                    handleFetchAll(false, "", response.data)
                })
                .catch(error => {
                    handleFetchAll(false, "Something went wrong, refresh page to try again", {} as IResult)
                });
        },
        [currentCount],
    )


    const searchPokemon = useCallback(
        (text: string): void => {
            if (text.length >= minText) {
                let usedText = text.toLowerCase()
                handleSearchResult(true, "", "", 0 )
                axios
                    .get(`pokemon/${usedText}`)
                    .then(response => {
                        if(response){
                            handleSearchResult(false, "", response.data.name, response.data.id )
                        }else{
                            handleSearchResult(false, "Something went wrong, check your internet and ensure correct pokemon spelling", "", 0 )
                        }
                    })
                    .catch(error => {
                        handleSearchResult(false, "Something went wrong, check your internet and ensure correct pokemon spelling", "", 0 )
                    });
            }
        },
        [searchText],
    )

    const nextPage = (): void => {
        setCurrentCount((prev) => prev + pageLimit)
    }

    const prevPage = (): void => {
        setCurrentCount((prev) => prev - pageLimit)
    }

    const getPokemonUrl = (id:number): string => {
        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${String(id)}`
        return pokemonUrl
    }

    useEffect(() => {
        getPokemons()
    }, [getPokemons])

    useEffect(() => {
        searchPokemon(searchText)
    }, [searchPokemon, searchText])


    return (
        <div className="px-5 md:px-10 lg:px-16 py-12">
            <Navbar handleSearchText={handleSearchText} />

            {/* conditionals to handle what is displayed when search has not started */}
            {fetchAll.loading && <Loader color="yellow" />}

            {!fetchAll.loading && !fetchAll.error && searchText.length < minText && <PokemonList result={result?.results} />}

            {!fetchAll.loading && fetchAll.error && searchText.length < minText && <ErrorDisplay error={fetchAll?.error} />}

            {
                !fetchAll.loading && !fetchAll.error && searchText.length < minText &&
                <div className=''>
                    <Pagination
                        next={result?.next}
                        previous={result?.previous}
                        nextPage={nextPage}
                        prevPage={prevPage}

                    />
                </div>
            }
            

            {/* conditionals to handle what is displayed when search has started */}
            {searchTerms.loading && <Loader color="yellow" />}

            {!searchTerms.loading && !searchTerms.error && searchText.length >= minText && <PokemonCard name={searchTerms.name} url={getPokemonUrl(searchTerms.id)} />}

            {!searchTerms.loading && searchTerms.error && searchText.length >= minText && <ErrorDisplay error={searchTerms?.error} />}

            
        </div>
    )
}

export default PokemonApp