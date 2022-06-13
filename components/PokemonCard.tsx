import React, { useEffect, useState } from 'react'
import { pk } from '../pages'
import Image from 'next/image'
import useSWR from 'swr'
import { IPokemon } from '../PokeApiTypes/interfaces/Pokemon/Pokemon'

const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> =>  await fetch(input, init).then(res => res.json())

function PokemonCard({ name, url }: pk) {

  const { data, error } = useSWR<IPokemon, any>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher)

  if(error) return <div>{error}</div>

  return (
    <a href={"/"+name}>
    <div className="flex flex-col justify-center items-center w-[200px] h-[200px]">
        {data &&
            <Image src={data?.sprites?.front_default} alt="Pokemon Sprite" width={150} height={150} /> 
          }
        <h2> 
          {name}
        </h2>
    </div>
    </a>
  )
}

export default PokemonCard