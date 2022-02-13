import React from 'react'
import { IPagination } from '../interfaces/IPokemon'

const Pagination = ({ next, previous, nextPage, prevPage }: IPagination) => {

    return (
        <div className="py-12 px-5 md:px-10 lg:px-16 flex items-center justify-between">
            <button disabled={previous ? false : true} onClick={prevPage}
                className="text-sm block p-3 text-white font-bold  bg-pokyellow border-2 border-pokblue rounded-md">
                Back
            </button>

            <button disabled={next ? false : true} onClick={nextPage}
                className="text-sm block p-3 text-white font-bold  bg-pokyellow border-2 border-pokblue rounded-md">
                Next
            </button>

        </div>
    )
}

export default Pagination