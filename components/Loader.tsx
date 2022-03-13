import React from 'react'

type LoaderProps = {
    color: "yellow" | "white"
}

const Loader = ({ color }:LoaderProps) => {
    return (
        <div className="py-3 flex justify-center items-center">
            <div className ={`spinner-${color}`} data-testid="spinner">
            </div>
        </div>
    )
}

export default Loader