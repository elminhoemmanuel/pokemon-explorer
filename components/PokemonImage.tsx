import React from 'react'
import Image from 'next/image';

type PokemonImageProps = {
    imgUrl:string
}

const PokemonImage = ({ imgUrl }:PokemonImageProps) => {
  return (
    <div className="">{imgUrl && <Image src={imgUrl} height={120} width={120} className="rounded my-2" alt="pokemon image" />}</div>
  )
}

export default PokemonImage