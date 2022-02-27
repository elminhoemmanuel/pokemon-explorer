import React from 'react'

type SecBtnProps = React.ComponentProps<'button'>

const SecBtn = ({ children, ...rest }: SecBtnProps) => {
    return (
        <button {...rest} className="text-sm block px-5 py-3 text-white font-bold  bg-pokblue hover:bg-blue-800 rounded-md">
            {children}
        </button>
    )
}

export default SecBtn