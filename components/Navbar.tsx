import React, { useEffect, useState } from 'react'
import Input from "./Input"

type NavbarProps = {
    handleSearchText: (val: string) => void
}

const Navbar = ({ handleSearchText }: NavbarProps) => {

    const [text, setText] = useState("")

    useEffect(() => {
        handleSearchText(text)
    }, [text])


    return (
        <nav className='mt-4 mb-10 flex flex-col md:flex-row md:items-center md:justify-between'>
            <div><h1 className="font-bold text-xl text-white mb-3 md:mb-0">List of Pokemons</h1></div>
            <div>
                <Input data-testid="search-input" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </nav>
    )
}

export default Navbar