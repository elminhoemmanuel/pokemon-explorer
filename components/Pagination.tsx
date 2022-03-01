import React from 'react'
import { IPagination } from '../interfaces/IPokemon'
import PriBtn from './PriBtn'

const Pagination = ({ next, previous, nextPage, prevPage }: IPagination) => {

    return (
        <div className="py-12 flex items-center justify-between">
            <PriBtn data-testid="back-btn" disabled={previous ? false : true} onClick={prevPage}>Back</PriBtn>
            <PriBtn data-testid="next-btn" disabled={next ? false : true} onClick={nextPage}>Next</PriBtn>
        </div>
    )
}

export default Pagination