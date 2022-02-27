import React from 'react'
import { IPagination } from '../interfaces/IPokemon'
import PriBtn from './PriBtn'

const Pagination = ({ next, previous, nextPage, prevPage }: IPagination) => {

    return (
        <div className="py-12 flex items-center justify-between">
            <PriBtn disabled={previous ? false : true} onClick={prevPage}>Back</PriBtn>
            <PriBtn disabled={next ? false : true} onClick={nextPage}>Next</PriBtn>
        </div>
    )
}

export default Pagination