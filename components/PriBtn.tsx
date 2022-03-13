import React from 'react'

type PriBtnProps = React.ComponentProps<'button'>

const PriBtn = ({ children, ...rest }: PriBtnProps) => {
    return (
        <button {...rest} className="text-sm block px-5 py-3 text-white font-bold  bg-pokyellow hover:bg-yellow-600 border-2 border-pokblue rounded-md">
            {children}
        </button>
    )
}

export default PriBtn