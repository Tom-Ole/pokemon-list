
import { useRouter } from 'next/router'
import React from 'react'
import useSWR, { Fetcher } from 'swr'
import LoadingWheel from '../components/LoadingWheel'
import { IPokemon } from '../PokeApiTypes/interfaces/Pokemon/Pokemon'
import Error404 from './404'


const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> =>  await fetch(input, init).then(res => res.json())


function Pokemon() {

  const router = useRouter()

  const { data, error, isValidating } = useSWR<IPokemon, any>(`https://pokeapi.co/api/v2/pokemon${router.asPath}`, fetcher)


  if (isValidating) return <LoadingWheel />
  if (error) return <Error404 />


  return (
    <div>{data ? data.name : ""}</div>
  )
}

export default Pokemon